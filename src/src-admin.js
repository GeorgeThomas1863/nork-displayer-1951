import axios from "axios";

import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";

export const runAdminSubmit = async (inputParams) => {
  const apiData = await sendAdminCommand(inputParams);
  const { scrapeId } = apiData;

  console.log("API DATA");
  console.log(apiData);

  const statsArray = await getStatsArray(scrapeId);
  const scrapeObj = {
    statsArray: statsArray,
    apiData: apiData,
  };

  console.log("SCRAPE OBJECTION");
  console.log(scrapeObj);
  return scrapeObj;
};

// FETCH VERSION
// export const sendAdminCommand = async (inputParams) => {
//   try {
//     const resAPI = await fetch(CONFIG.apiURL, {
//       method: "POST",
//       body: JSON.stringify(inputParams),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       //per claude fetch is weird with timeouts, prob better to use axios
//       headersTimeout: 3 * 60 * 60 * 1000, // 2 hours (60 min × 60 sec × 1000 ms)
//     });
//     const data = await resAPI.json();
//     console.log("DATA RETURN");
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

//axios version, send command other app, NEED TO TEST
export const sendAdminCommand = async (inputParams) => {
  const { apiURL } = CONFIG;
  try {
    const res = await axios.post(apiURL, inputParams);

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

//GET SCRAPE STATS FROM MONGO [USE SAME LOOP METHOD]
export const getStatsArray = async (scrapeId) => {
  const { logArr } = CONFIG;

  const scrapeStatsObj = {
    keyToLookup: "scrapeId",
    itemValue: scrapeId,
  };

  const statsArray = [];
  for (let i = 0; i < logArr.length; i++) {
    const logItem = logArr[i];
    console.log("LOG ITEM");
    console.log(logItem);

    //get scrape stats
    const scrapeStatsModel = new dbModel(scrapeStatsObj, CONFIG[logItem]);
    const scrapeStatsArray = await scrapeStatsModel.getUniqueArray();

    //get total stats (should work bc all collections are unique?) [!!DOUBLE CHECK THAT]
    const totalStatsModel = new dbModel("", CONFIG[logItem]);
    const totalStatsArray = await totalStatsModel.getAll();

    //LOG
    console.log("SCRAPE STATS RETURN LENGTH");
    console.log(scrapeStatsArray?.length);
    console.log("TOTAL STATS RETURN LENGTH");
    console.log(totalStatsArray?.length);

    //add to obj
    const statsObj = {
      [`${logItem}_scrape`]: scrapeStatsArray?.length || 0,
      [`${logItem}_total`]: totalStatsArray?.length || 0,
    };

    statsArray.push(statsObj);
  }

  return statsArray;
};
