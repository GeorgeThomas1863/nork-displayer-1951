import { buildTitleElement, buildDateElement } from "./return-util.js";
import { buildCollapseContainer, defineCollapseItems } from "../collapse.js";

export const buildVidPageArray = async (inputArray) => {
  if (!inputArray) return null;

  const vidPageContainer = document.createElement("ul");
  vidPageContainer.className = "vid-page-container";

  let isFirst = true;
  const collapseArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const vidPageElement = await buildVidPageListItem(inputArray[i], isFirst);
    if (vidPageElement) {
      vidPageContainer.append(vidPageElement);

      // Store the collapse components for group functionality
      const collapseItem = vidPageElement.querySelector(".collapse-container");
      if (collapseItem) collapseArray.push(collapseItem);

      isFirst = false;
    }
  }

  // Set up the collapse group behavior
  defineCollapseItems(collapseArray);

  return vidPageContainer;
};

export const buildVidPageListItem = async (inputObj, isFirst = false) => {
  const vidPageListItem = document.createElement("li");
  vidPageListItem.className = "vid-page-list-item";

  const vidPageElement = await buildVidPageElement(inputObj);
  if (!vidPageElement) return null;

  // Wrap in collapse
  const vidPageCollapseObj = {
    title: title,
    content: vidPageElement,
    isExpanded: isFirst,
    className: "vid-page-collapse",
  };

  const vidPageCollapseContainer = await buildCollapseContainer(vidPageCollapseObj);

  vidPageListItem.append(vidPageCollapseContainer);

  return vidPageListItem;
};

export const buildVidPageElement = async (inputObj) => {
  const vidPageElement = document.createElement("div");
  vidPageElement.className = "vid-page-element";

  const { title, date } = inputObj;

  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);

  vidPageElement.append(titleElement, dateElement);

  return vidPageElement;
};
