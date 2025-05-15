import axios from "axios";

import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";

import { keyMapObj } from "../config/map.js";

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

  // console.log("SCRAPE OBJECTION");
  // console.log(scrapeObj);
  return scrapeObj;
};

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

    //get scrape stats
    const scrapeStatsModel = new dbModel(scrapeStatsObj, CONFIG[logItem]);
    const scrapeStatsArray = await scrapeStatsModel.getUniqueArray();

    //get total stats (should work bc all collections are unique?) [!!DOUBLE CHECK THAT]
    const totalStatsModel = new dbModel("", CONFIG[logItem]);
    const totalStatsArray = await totalStatsModel.getAll();

    //add to obj
    const keyName = await getStatsKeyName(logItem);
    const statsObj = {
      [`${keyName}_scrape`]: scrapeStatsArray?.length || 0,
      [`${keyName}_total`]: totalStatsArray?.length || 0,
    };

    statsArray.push(statsObj);
  }

  return statsArray;
};

export const getStatsKeyName = async (inputItem) => {
  //loop through map obj, return match
  for (const k in keyMapObj) {
    if (inputItem === k) return keyMapObj[k];
  }

  //otherwise return null
  return null;
};
