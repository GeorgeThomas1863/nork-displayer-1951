import d from "../define-things.js";
// import { hideArray, unhideArray } from "../util.js";
import { parseBackendData } from "../data-return/return-main.js";

export const buildDefaultDisplay = async () => {
  //build drop down
  const dropDownElement = await buildDropDown();
  d.displayElement.appendChild(dropDownElement);

  // const actionButtonElement = await buildActionButtons();
  // d.displayElement.appendChild(actionButtonElement);
};

//--------------------

// export const displayBackendData = async (inputData) => {
//   // Check if data received
//   if (!inputData) return;

//   // Clear previous content
//   d.dataReturnElement.innerHTML = "";

//   // Parse and prepare the data for display
//   const displayData = await parseBackendData(inputData);

//   // If we have parsed articles, add them to the DOM
//   if (displayData && displayData.parsedArticles) {
//     d.dataReturnElement.append(displayData.parsedArticles);
//     d.dataReturnWrapper.classList.remove("hidden");
//   }
// };

const buildDropDown = async () => {
  // Create main drop-down container
  const dropDownElement = document.createElement("div");
  dropDownElement.id = "drop-down";

  // Create bars link element
  const dropDownBars = document.createElement("a");
  dropDownBars.id = "drop-down-bars";

  // Create three spans for the bars
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    dropDownBars.appendChild(span);
  }

  // Assemble the dropdown
  dropDownElement.appendChild(dropDownBars);

  return dropDownElement;
};

// Create menu list
// const dropDownMenu = document.createElement("ul");
// dropDownMenu.id = "drop-down-menu-display";

// // Create menu items
// const menuItems = ["Scrape KCNA", "Track Crypto"];
// for (let i = 0; i < menuItems.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = menuItems[i];
//   dropDownMenu.appendChild(li);
// }

// dropDownElement.appendChild(dropDownMenu);

const buildActionButtons = async () => {
  const actionButtonElement = document.createElement("ul");
  actionButtonElement.id = "action-button-wrapper";

  const actionButtonArray = [
    { id: "scrape-kcna-action-button", text: "Scrape KCNA", class: "action-button" },
    { id: "track-crypto-action-button", text: "Track Crypto", class: "action-button" },
  ];

  for (let i = 0; i < actionButtonArray.length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.id = actionButtonArray[i].id;
    button.textContent = actionButtonArray[i].text;
    button.className = actionButtonArray[i].class;

    li.appendChild(button);
    actionButtonElement.appendChild(li);
  }

  return actionButtonElement;
};

// export const runActionButtonDisplay = async (buttonClicked) => {
//   //adult way with switch case
//   switch (buttonClicked) {
//     case d.scrapeKcnaActionButton.id:
//       await unhideArray([d.scraperWrapper]);
//       break;

//     case d.trackCryptoActionButton.id:
//       await hideArray([d.scraperWrapper]);
//       break;
//   }
// };

// export const runScrapeTypeDisplay = async (buttonClicked) => {
//   //hide everything to start
//   await hideArray(d.listItemArray);

//   //claude's version with select case
//   switch (buttonClicked) {
//     case d.restartAuto.id:
//       await unhideArray([d.tgIdListItem]);
//       break;

//     case d.scrapeURL.id:
//       await unhideArray([d.urlInputListItem, d.scrapeToListItem]);
//       break;

//     case d.scrapeBoth.id: //both
//     case d.scrapePics.id: //pics
//     case d.scrapeArticles.id: //articles
//       await unhideArray([d.howManyListItem, d.scrapeToListItem, d.pullNewDataListItem]);
//       break;
//   }

//   //figure out if tg chat ID should be hidden
//   if (d.scrapeTo.value === displayTG.id) {
//     await unhideArray([d.tgIdListItem]);
//   }
// };

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

buildDefaultDisplay();
