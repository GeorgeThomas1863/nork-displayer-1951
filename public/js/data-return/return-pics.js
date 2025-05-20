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
  const picSetListItem = document.createElement("li");
  picSetListItem.className = "pic-set-list-item";

  //PARSE PICS HERE

  const picSetElement = await buildPicSetElement(inputObj);
  picSetListItem.appendChild(picSetElement);

  return picSetListItem;
};

export const buildPicSetElement = async (inputObj) => {
  const picSetElement = document.createElement("div");
  picSetElement.className = "pic-set-element";

  const { title, date } = inputObj;

  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);

  picSetElement.appendChild(titleElement, dateElement);

  return picSetElement;
};

//--------------------------------

export const buildPicArrayElement = async (inputArray) => {
  if (!inputArray || !inputArray.length) return null;

  const picArrayElement = document.createElement("ul");
  picArrayElement.className = "pic-array-element";

  for (let i = 0; i < inputArray.length; i++) {
    const picElement = await buildPicListItem(inputArray[i]);
    picArrayElement.appendChild(picElement);
  }
};

export const buildPicListItem = async (inputObj) => {
  const picElement = document.createElement("li");
  picElement.className = "pic-element";

  console.log("PIC LIST ITEM!!!", inputObj);

  return picElement;
};
