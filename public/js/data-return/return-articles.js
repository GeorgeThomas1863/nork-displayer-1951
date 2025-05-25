import { buildTitleElement, buildDateElement, buildTextElement } from "./return-util.js";
import { buildPicArrayElement } from "./return-pics.js";
import { buildCollapseContainer, defineCollapseItems } from "../collapse.js";

export const buildArticleArray = async (inputArray) => {
  if (!inputArray) return null;

  const articleContainer = document.createElement("ul");
  articleContainer.className = "article-container";

  let isFirst = true;
  const collapseArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const articleElement = await buildArticleListItem(inputArray[i], isFirst);
    articleContainer.append(articleElement);

    // Store the collapse components for group functionality
    const collapseItem = articleElement.querySelector(".collapse-container");
    if (collapseItem) collapseArray.push(collapseItem);

    isFirst = false;
  }

  // Set up the collapse group behavior
  defineCollapseItems(collapseArray);

  return articleContainer;
};

export const buildArticleListItem = async (inputObj, isFirst) => {
  const { title } = inputObj;

  const articleListItem = document.createElement("li");
  articleListItem.className = "article-list-item";

  // Create the article element (now includes pictures inside)
  const articleElement = await buildArticleElement(inputObj);

  // Wrap the article content in a collapsible
  const articleCollapseObj = {
    title: title,
    content: articleElement,
    isExpanded: isFirst,
    className: "article-element-collapse",
  };

  const articleCollapseContainer = await buildCollapseContainer(articleCollapseObj);
  articleListItem.append(articleCollapseContainer);

  return articleListItem;
};

export const buildArticleElement = async (inputObj) => {
  const { date, text, picArray } = inputObj;

  const articleElement = document.createElement("article");
  articleElement.className = "article-element";

  // Add pictures directly without collapse if they exist
  if (picArray && picArray.length) {
    const picArrayElement = await buildPicArrayElement(picArray);
    
    if (picArrayElement) {
      // Add a simple header to indicate pictures
      const picHeader = document.createElement("div");
      picHeader.className = "article-pic-header";
      picHeader.textContent = `${picArray.length} Picture${picArray.length > 1 ? 's' : ''}`;
      
      articleElement.append(picHeader, picArrayElement);
    }
  }

  // Then append date and text after pictures (title is handled by collapse header)
  const dateElement = await buildDateElement(date);
  const textElement = await buildTextElement(text);

  articleElement.append(dateElement, textElement);

  return articleElement;
};
