import CONFIG from "../config/config.js";
import dbModel from "../models/db-model.js";

export const getDefaultData = async () => {
  const articleModel = new dbModel("", CONFIG.articles);
  const articleArray = await articleModel.getAll();

  const picSetModel = new dbModel("", CONFIG.picSetContent);
  const picSetArray = await picSetModel.getAll();

  const vidPageModel = new dbModel("", CONFIG.vidPageContent);
  const vidPageArray = await vidPageModel.getAll();

  const dataObj = {
    articles: articleArray,
    picSets: picSetArray,
    vidPages: vidPageArray,
  };
};
