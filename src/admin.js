import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";

export const runAdminSubmit = async (inputParams) => {
  const scrapeData = await sendAdminCommand(inputParams);
  const { scrapeId } = scrapeData;

  console.log("SCRAPE DATA");
  console.log(scrapeData);

  const scrapeStats = await getScrapeStats(scrapeId);
  const scrapeObj = { ...scrapeStats, ...scrapeData };

  console.log("SCRAPE OBJECTION");
  console.log(scrapeObj);
  return scrapeObj;
};

// sends command to other app
export const sendAdminCommand = async (inputParams) => {
  try {
    const resAPI = await fetch(CONFIG.apiURL, {
      method: "POST",
      body: JSON.stringify(inputParams),
      headers: {
        "Content-Type": "application/json",
      },
      //per claude fetch is weird with timeouts, prob better to use axios
      headersTimeout: 3 * 60 * 60 * 1000, // 2 hours (60 min × 60 sec × 1000 ms)
    });
    const data = await resAPI.json();
    console.log("DATA RETURN");
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

//GET SCRAPE STATS FROM MONGO [USE SAME LOOP METHOD]
export const getScrapeStats = async (scrapeId) => {
  const { logArr } = CONFIG;

  const lookupObj = {
    keyToLookup: "scrapeId",
    itemValue: scrapeId,
  };

  const returnObj = {};
  for (let i = 0; i < logArr.length; i++) {
    const logItem = logArr[i];
    console.log("LOG ITEM");
    console.log(logItem);
    const loopModel = new dbModel(lookupObj, CONFIG[logItem]);
    const dataArray = await loopModel.getUniqueArray();
    console.log("LOOKUP RETURN");
    console.log(dataArray?.length);
    returnObj[logItem] = dataArray?.length || 0;
  }

  return returnObj;
};
