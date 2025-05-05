import d from "./define-things-admin.js";
import { hideArray, unhideArray } from "../util.js";
// import { parseDataReturn } from "./display-return/parse-return.js";

export const changeCommandDisplay = async (buttonClicked) => {
  //hide everything first
  await hideArray(d.listItemArray);

  //display based on Scrape Command clicked
  switch (buttonClicked) {
    //unhide everything
    case d.startScrape.id:
      await unhideArray([d.commandListItem, d.howMuchListItem, d.itemTypeListItem, d.uploadTGListItem]);
      break;

    case d.stopScrape.id:
      await unhideArray([d.commandListItem]);
      break;

    case d.scrapeStatus.id:
    case d.restartAuto.id:
      await unhideArray([d.commandListItem, d.itemTypeListItem]);
      break;
  }

  //figure out if article Type should be hidden
  if (buttonClicked !== d.stopScrape.id && d.itemType.value === d.articlesSelect.id) {
    await unhideArray([d.articleTypeListItem]);
  }

  //figure out if tg chat ID should be hidden
  if (buttonClicked !== d.stopScrape.id && d.uploadTG.value === d.yesTG.id) {
    await unhideArray([d.uploadTGListItem, d.tgIdListItem]);
  }

  return true;
};

export const changeHowMuchDisplay = async (buttonClicked) => {
  //hide it first
  await hideArray([d.urlInputListItem]);
  await unhideArray([d.itemTypeListItem]);

  //unhide URL if right button clicked
  if (buttonClicked === d.scrapeURL.id) {
    await unhideArray([d.urlInputListItem]);
    await hideArray([d.itemTypeListItem]);
  }

  //figure out if article Type should be hidden
  if (d.itemType.value === d.articlesSelect.id) {
    await unhideArray([d.articleTypeListItem]);
  }

  //figure out if tg chat ID should be hidden
  if (d.uploadTG.value === d.yesTG.id) {
    await unhideArray([d.uploadTGListItem, d.tgIdListItem]);
  }

  return true;
};

export const changeItemTypeDisplay = async (buttonClicked) => {
  await hideArray([d.articleTypeListItem]);

  //unhide if button clicked
  if (buttonClicked === d.articlesSelect.id) {
    await unhideArray([d.articleTypeListItem]);
  }

  //figure out if tg chat ID should be hidden
  if (d.uploadTG.value === d.yesTG.id) {
    await unhideArray([d.uploadTGListItem, d.tgIdListItem]);
  }

  return true;
};

export const changeTGUploadDisplay = async (buttonClicked) => {
  await hideArray([d.tgIdListItem]);

  if (buttonClicked === d.yesTG.id) {
    await unhideArray([d.tgIdListItem]);
  }

  //figure out if article Type should be hidden
  if (d.itemType.value === d.articlesSelect.id) {
    await unhideArray([d.articleTypeListItem]);
  }

  return true;
};

// export const runScrapeToDisplay = async (buttonClicked) => {
//   //hide start
//   await hideArray([d.tgIdListItem]);

//   switch (buttonClicked) {
//     case d.displayTG.id: //tgId
//       await unhideArray([d.tgIdListItem]);
//   }
// };

// export const displayDataReturn = async (inputData) => {
//   //check if data received
//   if (!inputData || !inputData.dataArray) return;

//   const displayData = await parseDataReturn(inputData);

//   //clear previous input
//   d.dataReturnElement.innerHTML = "";

//   d.dataReturnElement.appendChild(displayData);
//   d.dataReturnWrapper.classList.remove("hidden");
//   return;
// };
