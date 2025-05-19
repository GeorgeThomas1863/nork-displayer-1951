import { buildTitleElement, buildDateElement } from "./return-util.js";

export const buildVidPageArray = async (inputArray) => {
  if (!inputArray) return null;

  const vidPageContainer = document.createElement("ul");
  vidPageContainer.className = "vid-page-container";

  for (let i = 0; i < inputArray.length; i++) {
    const vidPageElement = await buildVidPageListItem(inputArray[i]);
    vidPageContainer.appendChild(vidPageElement);
  }

  return vidPageContainer;
};

export const buildVidPageListItem = async (inputObj) => {
  const vidPageListItem = document.createElement("li");
  vidPageListItem.className = "vid-page-list-item";

  const vidPageElement = await buildVidPageElement(inputObj);
  vidPageListItem.appendChild(vidPageElement);

  return vidPageListItem;
};

export const buildVidPageElement = async (inputObj) => {
  const vidPageElement = document.createElement("div");
  vidPageElement.className = "vid-page-element";

  const { title, date } = inputObj;

  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);

  vidPageElement.appendChild(titleElement, dateElement);

  return vidPageElement;
};
