import d from "../define-things.js";
import { buildArticleArray } from "./return-articles.js";

export const parseDefaultData = async (inputObj) => {
  if (!inputObj) return null;

  console.log("!!!!!INPUT DATA");
  console.log(inputObj);

  const { articles, picSets, vidPages } = inputObj;

  const articleContainer = await buildArticleArray(articles);
  d.articleDataReturnElement.innerHTML = "";

  d.articleDataReturnElement.appendChild(articleContainer);
  d.articleDataReturnElement.classList.remove("hidden");

  return true;
};

export const parsePicArray = async (inputArray) => {
  console.log("BUILD");
};
