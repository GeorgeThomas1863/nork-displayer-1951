//import modules
import d from "../define-things.js";
// import { runActionButtonDisplay, runScrapeTypeDisplay, runScrapeToDisplay, displayDataReturn, displayDefaultData } from "../display/display-main.js";
import { displayBackendData } from "../display/display-main.js";
import { buildMainParams, sendToBack } from "../util.js";

//ADD EVENT / PARSE LISTENERS
const clickHandler = async (e) => {
  e.preventDefault();
  const eventElement = e.target;
  const buttonClickedId = eventElement.id;
  const buttonClickedValue = eventElement.value;

  console.log("THING CLICKED");
  console.log(e);
  console.log(eventElement);
  console.log(buttonClickedId);
  console.log(buttonClickedValue);
};

d.displayElement.addEventListener("click", clickHandler);

//------------------------

const runGetBackendData = async () => {
  //get data from backend
  const data = await sendToBack({ route: "/get-backend-data" });

  //display the returned data
  if (data) {
    await displayBackendData(data);
  }
};

//PROB A DUMB WAY OF DOING THIS, but DOING IT ANYWAY
const expandWrapper = async (e) => {
  e.preventDefault();
  const buttonClicked = e.target;
  console.log("AHHHHHHHHHHHHHHHH");
  console.log(buttonClicked);
};

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
