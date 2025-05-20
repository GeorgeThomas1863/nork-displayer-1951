import { buildTitleElement, buildDateElement } from "./return-util.js";
import { buildCollapsible, setupCollapsibleGroup } from "./collapsible.js";

export const buildPicSetArray = async (inputArray) => {
  if (!inputArray) return null;

  const picSetContainer = document.createElement("ul");
  picSetContainer.className = "pic-set-container";
  
  const collapsibles = [];
  let isFirst = true;

  for (let i = 0; i < inputArray.length; i++) {
    const picSetElement = await buildPicSetListItem(inputArray[i], isFirst);
    if (picSetElement) {
      picSetContainer.appendChild(picSetElement);
      
      // Store the collapsible components for group functionality
      const collapsible = picSetElement.querySelector('.collapsible-container');
      if (collapsible) collapsibles.push(collapsible);
      
      isFirst = false;
    }
  }
  
  // Set up the collapsible group behavior
  setupCollapsibleGroup(collapsibles);

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
  
  infoContainer.appendChild(titleElement);
  infoContainer.appendChild(dateElement);
  
  // Create content container that includes both info and pictures
  const contentContainer = document.createElement("div");
  contentContainer.className = "pic-set-content";
  contentContainer.appendChild(infoContainer);
  contentContainer.appendChild(picArrayElement);
  
  // Wrap everything in a collapsible
  const picSetCollapsible = buildCollapsible(
    title, 
    contentContainer, 
    isFirst // First pic set starts expanded
  );
  
  picSetListItem.appendChild(picSetCollapsible);

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
