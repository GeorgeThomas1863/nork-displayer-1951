import { buildTitleElement, buildDateElement, buildTextElement } from "./return-util.js";
import { buildPicArrayElement } from "./return-pics.js";

export const buildArticleArray = async (inputArray) => {
  if (!inputArray) return null;

  const articleContainer = document.createElement("ul");
  articleContainer.className = "article-container";

  let isFirst = true;

  for (let i = 0; i < inputArray.length; i++) {
    const articleElement = await buildArticleListItem(inputArray[i], isFirst);
    articleContainer.appendChild(articleElement);
    isFirst = false;
  }

  return articleContainer;
};

export const buildArticleListItem = async (inputObj, isFirst) => {
  const { picArray } = inputObj;

  const articleListItem = document.createElement("li");
  articleListItem.className = "article-list-item";

  //PARSE PICS HERE
  const picArrayElement = await buildPicArrayElement(picArray);

  const articleElement = await buildArticleElement(inputObj);
  // const articleElementCollapse = await buildCollapseDisplay(inputObj.title, articleElement, isFirst);
  // articleListItem.append(articleElementCollapse);

  //FIX ABOVE
  articleListItem.append(articleElement);

  return articleListItem;
};

export const buildArticleElement = async (inputObj) => {
  const { title, date, text } = inputObj;

  const articleElement = document.createElement("article");
  articleElement.className = "article-element";

  // Create and append title
  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);
  const textElement = await buildTextElement(text);

  articleElement.appendChild(titleElement, dateElement, textElement);

  return articleElement;
};
