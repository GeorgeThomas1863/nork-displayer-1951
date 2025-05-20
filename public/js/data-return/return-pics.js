import { buildTitleElement, buildDateElement } from "./return-util.js";

export const buildPicSetArray = async (inputArray) => {
  if (!inputArray) return null;

  const picSetContainer = document.createElement("ul");
  picSetContainer.className = "pic-set-container";

  for (let i = 0; i < inputArray.length; i++) {
    const picSetElement = await buildPicSetListItem(inputArray[i]);
    picSetContainer.appendChild(picSetElement);
  }

  return picSetContainer;
};

export const buildPicSetListItem = async (inputObj) => {
  const { picArray, title, date } = inputObj;
  if (!picArray || !picArray.length) return null;

  const picSetListItem = document.createElement("li");
  picSetListItem.className = "pic-set-list-item";

  //PARSE PICS HERE
  const picArrayElement = await buildPicArrayElement(picArray);
  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);

  picSetListItem.appendChild(picArrayElement, titleElement, dateElement);

  return picSetListItem;
};

//--------------------------------

export const buildPicArrayElement = async (inputArray) => {
  if (!inputArray || !inputArray.length) return null;

  const picArrayElement = document.createElement("ul");
  picArrayElement.className = "pic-array-element";

  for (let i = 0; i < inputArray.length; i++) {
    const picListItem = await buildPicListItem(inputArray[i]);
    if (!picListItem) continue;
    console.log("PIC LIST ITEM!!!", picListItem);

    picArrayElement.appendChild(picListItem);
  }

  return picArrayElement;
};

export const buildPicListItem = async (inputObj) => {
  if (!inputObj || !inputObj.savePath) return null;
  const { savePath } = inputObj;

  const picListItem = document.createElement("li");
  picListItem.className = "pic-list-item";

  //ADD pic stats here (scrape date, server, size, etc)

  const picElement = await buildPicElement(savePath);
  picListItem.appendChild(picElement);

  return picListItem;
};

export const buildPicElement = async (savePath) => {
  const picElement = document.createElement("img");
  picElement.className = "pic-element";

  //define pic path
  const fileName = savePath.split("/").pop();
  const picPath = "/kcna-pics/" + fileName;

  picElement.src = picPath;
  picElement.alt = "KCNA PIC";

  return picElement;
};
