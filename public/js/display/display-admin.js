import d from "../define-things.js";
import { hideArray, unhideArray } from "../util.js";
import { parseAdminDataReturn } from "../data-return/parse-return.js";

export const adminCommandDisplay = async (buttonClicked) => {
  //hide everything first
  await hideArray(d.adminListItemArray);

  //display based on Scrape Command clicked
  switch (buttonClicked) {
    //unhide everything
    case d.adminStartScrape.id:
      await unhideArray([d.adminCommandListItem, d.adminHowMuchListItem, d.adminItemTypeListItem, d.adminUploadTGListItem]);
      break;

    case d.adminStopScrape.id:
      await unhideArray([d.adminCommandListItem]);
      break;

    case d.adminScrapeStatus.id:
    case d.adminRestartAuto.id:
      await unhideArray([d.adminCommandListItem, d.adminItemTypeListItem, d.adminUploadTGListItem]);
      break;
  }

  //figure out if url should be hidden
  if (buttonClicked === d.adminStartScrape.id && d.adminHowMuch.value === d.adminScrapeURL.id) {
    await unhideArray([d.adminUrlInputListItem]);
  }

  //figure out if article Type should be hidden
  if (buttonClicked !== d.adminStopScrape.id && d.adminItemType.value === d.adminArticlesSelect.id) {
    await unhideArray([d.adminArticleTypeListItem]);
  }

  //figure out if tg chat ID should be hidden
  if (buttonClicked !== d.adminStopScrape.id && d.adminUploadTG.value === d.adminYesTG.id) {
    await unhideArray([d.adminUploadTGListItem, d.adminTgIdListItem]);
  }

  return true;
};

export const adminHowMuchDisplay = async (buttonClicked) => {
  //hide it first
  await hideArray([d.adminUrlInputListItem]);
  await unhideArray([d.adminItemTypeListItem]);

  //unhide URL if right button clicked
  if (buttonClicked === d.adminScrapeURL.id) {
    await unhideArray([d.adminUrlInputListItem]);
    await hideArray([d.adminItemTypeListItem]);
  }

  //figure out if article Type should be hidden
  if (d.adminItemType.value === d.adminArticlesSelect.id) {
    await unhideArray([d.adminArticleTypeListItem]);
  }

  //figure out if tg chat ID should be hidden
  if (d.adminUploadTG.value === d.adminYesTG.id) {
    await unhideArray([d.adminUploadTGListItem, d.adminTgIdListItem]);
  }

  return true;
};

export const adminItemTypeDisplay = async (buttonClicked) => {
  await hideArray([d.adminArticleTypeListItem]);

  //unhide if button clicked
  if (buttonClicked === d.adminArticlesSelect.id) {
    await unhideArray([d.adminArticleTypeListItem]);
  }

  //figure out if tg chat ID should be hidden
  if (d.adminUploadTG.value === d.adminYesTG.id) {
    await unhideArray([d.adminUploadTGListItem, d.adminTgIdListItem]);
  }

  return true;
};

export const adminTGUploadDisplay = async (buttonClicked) => {
  await hideArray([d.adminTgIdListItem]);

  if (buttonClicked === d.adminYesTG.id) {
    await unhideArray([d.adminTgIdListItem]);
  }

  //figure out if article Type should be hidden
  if (d.adminItemType.value === d.adminArticlesSelect.id) {
    await unhideArray([d.adminArticleTypeListItem]);
  }

  return true;
};

//---------------

export const displayAdminReturn = async (inputData) => {
  if (!inputData) return "NO DATA RECEIVED";

  console.log("RETURN DATA");
  console.log(inputData);

  const displayData = await parseAdminDataReturn(inputData);

  //clear previous input
  d.adminDataReturnElement.innerHTML = "";

  d.adminDataReturnElement.appendChild(displayData);
  d.adminDataReturnWrapper.classList.remove("hidden");
  return;
};
