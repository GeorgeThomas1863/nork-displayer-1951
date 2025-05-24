import d from "../define-things.js";
// import { hideArray, unhideArray } from "../util.js";
import { parseBackendData } from "../data-return/return-main.js";

//REFACTOR THIS SHIT

//DISPLAY CONTROL FUNCTION
export const buildDefaultDisplay = async () => {
  //build drop down (for action buttons)
  const dropDownElement = await buildDropDown();
  d.displayElement.appendChild(dropDownElement);

  //build main display
  const formWrapperElement = await buildFormWrapper();
  d.displayElement.appendChild(formWrapperElement);
};

//--------------------------------

//DROP DOWN FUNCTIONS

const buildDropDown = async () => {
  // Create main drop-down container
  const dropDownElement = document.createElement("div");
  dropDownElement.id = "drop-down";

  // Create bars link element
  const dropDownBars = document.createElement("a");
  dropDownBars.id = "drop-down-bars";
  dropDownBars.setAttribute("data-action", "toggle-dropdown");

  // Create three spans for the bars
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.setAttribute("data-action", "toggle-dropdown");
    dropDownBars.appendChild(span);
  }

  // Assemble the dropdown
  dropDownElement.appendChild(dropDownBars);

  //build action buttons
  const actionButtonElement = await buildActionButtonElement();
  dropDownElement.appendChild(actionButtonElement);

  return dropDownElement;
};

export const buildActionButtonElement = async () => {
  const actionButtonElement = document.createElement("ul");
  actionButtonElement.id = "action-button-element";

  //hidden by default
  actionButtonElement.classList.add("hidden");

  const actionButtonArray = [
    //hidden by default
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

//--------------------------------

//MAIN DISPLAY FUNCTIONS

const buildFormWrapper = async () => {
  const formWrapperElement = document.createElement("div");
  formWrapperElement.id = "form-wrapper";

  const articleWrapper = await buildArticleWrapper();
  // const picSetWrapper = await buildPicSetWrapper();
  // const vidPageWrapper = await buildVidPageWrapper();

  // formWrapperElement.append(articleWrapper, picSetWrapper, vidPageWrapper);

  //REMOVE ONCE WE HAVE THE OTHER WRAPPERS
  formWrapperElement.append(articleWrapper);

  return formWrapperElement;
};

const buildArticleWrapper = async () => {
  const articleWrapper = document.createElement("ul");
  articleWrapper.id = "article-wrapper";

  // Create h1 element
  const h1 = document.createElement("h1");
  h1.textContent = "ARTICLES";

  // Create first list item (Article Type)
  const articleTypeListItem = document.createElement("li");
  articleTypeListItem.id = "article-type-list-item";

  const articleTypeLabel = document.createElement("label");
  articleTypeLabel.setAttribute("for", "article-type");
  articleTypeLabel.textContent = "Article Type";

  const articleTypeSelect = document.createElement("select");
  articleTypeSelect.name = "article-type";
  articleTypeSelect.id = "article-type";

  // Create options for article type select
  const options = [
    { value: "all-type", id: "all-type", text: "All", selected: true },
    { value: "fatboy", id: "fatboy", text: "Revolutionary Activities" },
    { value: "top-news", id: "top-news", text: "Top News" },
    { value: "latest-news", id: "latest-news", text: "Latest News" },
    { value: "external-news", id: "external-news", text: "External News" },
    { value: "anecdote", id: "anecdote", text: "Revolutionary Anecdotes" },
    { value: "people", id: "people", text: "Always in Memory of the People" },
  ];

  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.id = optionData.id;
    option.textContent = optionData.text;
    if (optionData.selected) {
      option.selected = true;
    }
    articleTypeSelect.append(option);
  });

  articleTypeListItem.append(articleTypeLabel, articleTypeSelect);

  // Create second list item (How Many)
  const articleHowManyListItem = document.createElement("li");
  articleHowManyListItem.id = "article-how-many-list-item";

  const articleHowManyLabel = document.createElement("label");
  articleHowManyLabel.setAttribute("for", "article-how-many");
  articleHowManyLabel.textContent = "How Many?";

  const articleHowManyInput = document.createElement("input");
  articleHowManyInput.type = "text";
  articleHowManyInput.name = "article-how-many";
  articleHowManyInput.id = "article-how-many";
  articleHowManyInput.placeholder = "[Defaults to 1 (most recent)]";

  articleHowManyListItem.append(articleHowManyLabel, articleHowManyInput);

  // Create third list item (Sort By)
  const articleSortByListItem = document.createElement("li");
  articleSortByListItem.id = "article-sort-by-list-item";

  const articleSortByLabel = document.createElement("label");
  articleSortByLabel.setAttribute("for", "article-sort-by");
  articleSortByLabel.textContent = "Sort By";

  const articleSortBySelect = document.createElement("select");
  articleSortBySelect.name = "article-sort-by";
  articleSortBySelect.id = "article-sort-by";

  // Create options for sort by select
  const sortOptions = [
    { value: "article-newest-to-oldest", id: "article-newest-to-oldest", text: "Newest to Oldest", selected: true },
    { value: "article-oldest-to-newest", id: "article-oldest-to-newest", text: "Oldest to Newest" },
  ];

  sortOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.id = optionData.id;
    option.textContent = optionData.text;
    if (optionData.selected) {
      option.selected = true;
    }
    articleSortBySelect.append(option);
  });

  articleSortByListItem.append(articleSortByLabel, articleSortBySelect);

  //ADD IN THE GET ARTICLE DATA HERE

  // Append all elements to the container
  articleWrapper.append(h1, articleTypeListItem, articleHowManyListItem, articleSortByListItem);

  return articleWrapper;
};

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
