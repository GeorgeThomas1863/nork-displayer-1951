import fs from "fs";
import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";
import { sortArrayByDate } from "./src-util.js";

export const getBackendData = async () => {
  const { picSetContent, vidPageContent } = CONFIG;

  //loops through type, returning only last FIVE of each
  const articleArrayRaw = await getArticleArrayByType();

  console.log("ARTICLE ARRAY RAW");
  console.log(articleArrayRaw?.length);

  //resort article array by date
  const articleArray = await sortArrayByDate(articleArrayRaw);

  const params = {
    sortKey: "date",
    howMany: 5,
  };

  const picSetModel = new dbModel(params, picSetContent);
  const picSetArray = await picSetModel.getLastItemsArray();

  const vidPageModel = new dbModel(params, vidPageContent);
  const vidPageArray = await vidPageModel.getLastItemsArray();

  const dataObj = {
    articles: articleArray,
    picSets: picSetArray,
    vidPages: vidPageArray,
  };

  return dataObj;
};

//GETS LAST 5 OF EACH ARTICLE TYPE
const getArticleArrayByType = async () => {
  const { articleTypeArr, articles } = CONFIG;

  const articleArray = [];
  for (let i = 0; i < articleTypeArr.length; i++) {
    const params = {
      sortKey: "date",
      howMany: 5,
      filterKey: "articleType",
      filterValue: articleTypeArr[i],
    };

    const articleModel = new dbModel(params, articles);
    const articleArrayRaw = await articleModel.getLastItemsByTypeArray();
    const articleData = await addArticlePicData(articleArrayRaw);
    if (!articleData || !articleData.length) continue;

    articleArray.push(...articleData);
  }

  return articleArray;
};

//add pic data to pic array
const addArticlePicData = async (inputArray) => {
  //parse through each article
  const articlePicArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const articleObj = await parseArticleObj(inputArray[i]);
    articlePicArray.push(articleObj);
  }

  return articlePicArray;
};

const parseArticleObj = async (inputObj) => {
  const { picArray } = inputObj;
  if (!picArray || !picArray.length) return inputObj;

  //create new article obj
  const articlePicObj = { ...inputObj };

  //otherwise parse each pic
  const picDataArray = [];
  for (let i = 0; i < picArray.length; i++) {
    try {
      const picURL = picArray[i];
      const picObj = await getPicData(picURL);

      picDataArray.push(picObj);
    } catch (e) {
      console.log(e);
    }
  }

  articlePicObj.picArray = picDataArray;

  return articlePicObj;
};

//takes url as input and returns pic data
const getPicData = async (picURL) => {
  const { picsDownloaded } = CONFIG;

  const lookupParams = {
    keyToLookup: "url",
    itemValue: picURL,
  };

  const picDataModel = new dbModel(lookupParams, picsDownloaded);
  const picObj = await picDataModel.getUniqueItem();

  //checks if pic exists, return null if it doesnt
  if (!picObj || !picObj.savePath || !fs.existsSync(picObj.savePath)) return null;

  return picObj;
};
