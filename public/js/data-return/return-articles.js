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
  const { picArray, title } = inputObj;

  const articleListItem = document.createElement("li");
  articleListItem.className = "article-list-item";

  // Create the article element
  const articleElement = await buildArticleElement(inputObj);

  // Create the picture element if exists
  let picArrayElement = null;
  if (picArray && picArray.length) {
    picArrayElement = await buildPicArrayElement(picArray);

    // Wrap pictures in a collapse if there are any
    if (picArrayElement) {
      // Create collapse object
      const picCollapseObj = {
        title: `${picArray.length} Pics`,
        content: picArrayElement,
        isExpanded: false,
      };

      const picCollapseContainer = await buildCollapseContainer(picCollapseObj);
      articleListItem.append(picCollapseContainer);
    }
  }

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
  const { title, date, text } = inputObj;

  const articleElement = document.createElement("article");
  articleElement.className = "article-element";

  // Create and append title
  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);
  const textElement = await buildTextElement(text);

  articleElement.append(titleElement, dateElement, textElement);

  return articleElement;
};
