import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";

export const getDefaultData = async () => {
  const { articles, picSetContent, vidPageContent } = CONFIG;

  const articleModel = new dbModel("", articles);
  const articleArrayRaw = await articleModel.getAll();
  const articleArray = await addArticlePicData(articleArrayRaw);

  const picSetModel = new dbModel("", picSetContent);
  const picSetArray = await picSetModel.getAll();

  const vidPageModel = new dbModel("", vidPageContent);
  const vidPageArray = await vidPageModel.getAll();

  const dataObj = {
    articles: articleArray,
    picSets: picSetArray,
    vidPages: vidPageArray,
  };

  return dataObj;
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

  return picObj;
};
