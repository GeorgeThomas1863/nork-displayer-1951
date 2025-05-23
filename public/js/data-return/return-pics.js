import { buildTitleElement, buildDateElement } from "./return-util.js";
import { buildCollapseContainer, defineCollapseItems } from "../collapse.js";

export const buildPicSetArray = async (inputArray) => {
  if (!inputArray) return null;

  const picSetContainer = document.createElement("ul");
  picSetContainer.className = "pic-set-container";

  let isFirst = true;
  const collapseArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const picSetElement = await buildPicSetListItem(inputArray[i], isFirst);
    if (picSetElement) {
      picSetContainer.append(picSetElement);

      // Store the collapse components for group functionality
      const collapseItem = picSetElement.querySelector(".collapse-container");
      if (collapseItem) collapseArray.push(collapseItem);

      isFirst = false;
    }
  }

  // Set up the collapse group behavior
  defineCollapseItems(collapseArray);

  return picSetContainer;
};

export const buildPicSetListItem = async (inputObj, isFirst = false) => {
  const { picArray, title, date } = inputObj;
  if (!picArray || !picArray.length) return null;

  const picSetListItem = document.createElement("li");
  picSetListItem.className = "pic-set-list-item";

  // Create picture array element
  const picArrayElement = await buildPicArrayElement(picArray);
  if (!picArrayElement) return null;

  // Create info container
  const infoContainer = document.createElement("div");
  infoContainer.className = "pic-set-info";

  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);

  infoContainer.append(titleElement, dateElement);

  // Create content container that includes both info and pictures
  const contentContainer = document.createElement("div");
  contentContainer.className = "pic-set-content";
  contentContainer.append(infoContainer, picArrayElement);

  // Wrap everything in a collapse
  const picSetCollapseObj = {
    title: title,
    content: contentContainer,
    isExpanded: isFirst,
    className: "pic-set-collapse",
  };

  const picSetCollapseContainer = await buildCollapseContainer(picSetCollapseObj);

  picSetListItem.append(picSetCollapseContainer);

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
    // console.log("PIC LIST ITEM!!!", picListItem);

    picArrayElement.append(picListItem);
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
  picListItem.append(picElement);

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
