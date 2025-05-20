import { buildTitleElement, buildDateElement, buildTextElement } from "./return-util.js";
import { buildPicArrayElement } from "./return-pics.js";
import { buildCollapsible, setupCollapsibleGroup } from "./collapsible.js";

export const buildArticleArray = async (inputArray) => {
  if (!inputArray) return null;

  const articleContainer = document.createElement("ul");
  articleContainer.className = "article-container";

  let isFirst = true;
  const collapsibles = [];

  for (let i = 0; i < inputArray.length; i++) {
    const articleElement = await buildArticleListItem(inputArray[i], isFirst);
    articleContainer.appendChild(articleElement);
    
    // Store the collapsible components for group functionality
    const collapsible = articleElement.querySelector('.collapsible-container');
    if (collapsible) collapsibles.push(collapsible);
    
    isFirst = false;
  }
  
  // Set up the collapsible group behavior
  setupCollapsibleGroup(collapsibles);

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
    
    // Wrap pictures in a collapsible if there are any
    if (picArrayElement) {
      const picCollapsible = buildCollapsible(
        "Show Images", 
        picArrayElement, 
        false,
        "article-pic-list-collapse"
      );
      articleListItem.appendChild(picCollapsible);
    }
  }

  // Wrap the article content in a collapsible
  const articleCollapsible = buildCollapsible(
    title, 
    articleElement, 
    isFirst // First article starts expanded
  );
  
  articleListItem.appendChild(articleCollapsible);

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

  articleElement.appendChild(titleElement);
  articleElement.appendChild(dateElement);
  articleElement.appendChild(textElement);

  return articleElement;
};
