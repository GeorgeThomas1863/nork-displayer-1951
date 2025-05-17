//import modules
import d from "../define-things.js";
import { runActionButtonDisplay, runScrapeTypeDisplay, runScrapeToDisplay, displayDataReturn } from "../display/display-main.js";
import { buildMainParams, sendToBack } from "../util.js";

const runGetDefaultData = async () => {
  //create params for default route
  const inputParams = {
    route: "/get-default-data",
  };

  //get data from backend
  const data = await sendToBack(inputParams);

  //display the returned data
  if (data) {
    await displayDataReturn(data);
  }
};

const scrapeSubmit = async (e) => {
  e.preventDefault();

  //get input params
  const inputParams = await buildMainParams();

  //get data
  const data = await sendToBack(inputParams);
  console.dir(data);

  //display data
  await displayDataReturn(data);
};

const changeDisplay = async (e) => {
  e.preventDefault();
  const eventElement = e.target;
  const buttonClickedId = eventElement.id;
  const buttonClickedValue = eventElement.value;

  //execute function based on event trigger
  switch (eventElement.id) {
    case d.scrapeKcnaActionButton.id:
    case d.trackCryptoActionButton.id:
      await runActionButtonDisplay(buttonClickedId);
      break;

    case d.scrapeType.id:
      await runScrapeTypeDisplay(buttonClickedValue);
      break;

    case d.scrapeTo.id:
      await runScrapeToDisplay(buttonClickedValue);
      break;
  }
};

//CALL SEPARATELY TO EXECUTE WHEN PAGE LOADS
runGetDefaultData();
