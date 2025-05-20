import { buildTitleElement, buildDateElement } from "./return-util.js";
import { buildCollapsible, setupCollapsibleGroup } from "./collapsible.js";

export const buildVidPageArray = async (inputArray) => {
  if (!inputArray) return null;

  const vidPageContainer = document.createElement("ul");
  vidPageContainer.className = "vid-page-container";
  
  const collapsibles = [];
  let isFirst = true;

  for (let i = 0; i < inputArray.length; i++) {
    const vidPageElement = await buildVidPageListItem(inputArray[i], isFirst);
    if (vidPageElement) {
      vidPageContainer.appendChild(vidPageElement);
      
      // Store the collapsible components for group functionality
      const collapsible = vidPageElement.querySelector('.collapsible-container');
      if (collapsible) collapsibles.push(collapsible);
      
      isFirst = false;
    }
  }
  
  // Set up the collapsible group behavior
  setupCollapsibleGroup(collapsibles);

  return vidPageContainer;
};

export const buildVidPageListItem = async (inputObj, isFirst = false) => {
  const vidPageListItem = document.createElement("li");
  vidPageListItem.className = "vid-page-list-item";

  const vidPageElement = await buildVidPageElement(inputObj);
  if (!vidPageElement) return null;
  
  // Wrap in collapsible
  const vidPageCollapsible = buildCollapsible(
    inputObj.title, 
    vidPageElement, 
    isFirst // First video page starts expanded
  );
  
  vidPageListItem.appendChild(vidPageCollapsible);

  return vidPageListItem;
};

export const buildVidPageElement = async (inputObj) => {
  const vidPageElement = document.createElement("div");
  vidPageElement.className = "vid-page-element";

  const { title, date } = inputObj;

  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);

  vidPageElement.appendChild(titleElement);
  vidPageElement.appendChild(dateElement);

  return vidPageElement;
};
