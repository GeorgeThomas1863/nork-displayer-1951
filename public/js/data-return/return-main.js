import d from "../define-things.js";
import { buildArticleArray } from "./return-articles.js";
import { buildPicSetArray } from "./return-pics.js";
import { buildVidPageArray } from "./return-vids.js";

export const parseDefaultData = async (inputObj) => {
  if (!inputObj) return null;

  console.log("!!!!!INPUT DATA");
  console.log(inputObj);

  const { articles, picSets, vidPages } = inputObj;

  const articleContainer = await buildArticleArray(articles);
  const picSetContainer = await buildPicSetArray(picSets);
  const vidPageContainer = await buildVidPageArray(vidPages);

  const returnObj = {
    parsedArticles: articleContainer,
    parsedPicSets: picSetContainer,
    parsedVidPages: vidPageContainer,
  };

  return returnObj;
};
