import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";

export const getDefaultData = async () => {
  const { articles, picSetContent, vidPageContent } = CONFIG;

  const articleModel = new dbModel("", articles);
  const articleArray = await articleModel.getAll();

  const picSetModel = new dbModel("", picSetContent);
  const picSetArray = await picSetModel.getAll();

  const vidPageModel = new dbModel("", vidPageContent);
  const vidPageArray = await vidPageModel.getAll();

  const dataObj = {
    articles: articleArray,
    picSets: picSetArray,
    vidPages: vidPageArray,
  };

  console.log("DATA OBJ");
  console.log(dataObj);

  return dataObj;
};
