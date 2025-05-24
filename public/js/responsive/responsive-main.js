//import modules
import d from "../define-things.js";

// import { runActionButtonDisplay, runScrapeTypeDisplay, runScrapeToDisplay, displayDataReturn, displayDefaultData } from "../display/display-main.js";
// import { displayBackendData } from "../display/display-main.js";
import { buildMainParams, sendToBack } from "../util.js";

//ADD EVENT / PARSE LISTENERS
const clickHandler = async (e) => {
  console.log("AHHHHH");
  e.preventDefault();
  const eventElement = e.target;
  const actionType = eventElement.getAttribute("data-action");

  switch (actionType) {
    case "toggle-dropdown":
      //toggle action buttons on or off
      const actionButtonElement = document.getElementById("action-button-element");
      actionButtonElement.classList.toggle("hidden");

      break;
    default:
      return null;
  }

  console.log("THING CLICKED");
  console.log(actionType);
};

d.displayElement.addEventListener("click", clickHandler);

//------------------------

//PROB A DUMB WAY OF DOING THIS, but DOING IT ANYWAY
// const expandWrapper = async (e) => {
//   e.preventDefault();
//   const buttonClicked = e.target;
//   console.log("AHHHHHHHHHHHHHHHH");
//   console.log(buttonClicked);
// };

// const scrapeSubmit = async (e) => {
//   e.preventDefault();

//   //get input params
//   const inputParams = await buildMainParams();

//   //get data
//   const data = await sendToBack(inputParams);
//   console.dir(data);

//   //display data
//   await displayDataReturn(data);
// };

// const changeDisplay = async (e) => {
//   e.preventDefault();
//   const eventElement = e.target;
//   const buttonClickedId = eventElement.id;
//   const buttonClickedValue = eventElement.value;

//   //execute function based on event trigger
//   switch (eventElement.id) {
//     case d.scrapeKcnaActionButton.id:
//     case d.trackCryptoActionButton.id:
//       await runActionButtonDisplay(buttonClickedId);
//       break;

//     case d.scrapeType.id:
//       await runScrapeTypeDisplay(buttonClickedValue);
//       break;

//     case d.scrapeTo.id:
//       await runScrapeToDisplay(buttonClickedValue);
//       break;
//   }
// };

//click listeners
// d.articleWrapper.addEventListener("click", expandWrapper);

//CALL SEPARATELY TO EXECUTE WHEN PAGE LOADS
// runGetBackendData();
