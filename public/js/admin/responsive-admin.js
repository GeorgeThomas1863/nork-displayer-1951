//import modules
// import { hideArray, unhideArray } from "../util.js";
import d from "./define-things-admin.js";
import { changeCommandDisplay, changeHowMuchDisplay, changeItemTypeDisplay, changeTGUploadDisplay } from "./display-admin.js";
import { buildAdminParams, sendAdminToBack } from "./submit-admin.js";

const adminSubmit = async (e) => {
  e.preventDefault();

  console.log("FUCK YOU FAGGOT");

  //get input params
  const adminParams = await buildAdminParams();

  //get data
  const adminData = await sendAdminToBack(adminParams);
  console.dir(adminData);

  //display data
  // await displayDataReturn(data);
};

const changeAdminDisplay = async (e) => {
  e.preventDefault();
  const eventElement = e.target;
  const buttonClickedId = eventElement.id;
  const buttonClickedValue = eventElement.value;

  //run function based on what list item clicked
  switch (buttonClickedId) {
    case d.commandType.id:
      await changeCommandDisplay(buttonClickedValue);
      return;

    case d.howMuch.id:
      await changeHowMuchDisplay(buttonClickedValue);
      return;

    case d.itemType.id:
      await changeItemTypeDisplay(buttonClickedValue);
      return;

    case d.uploadTG.id:
      await changeTGUploadDisplay(buttonClickedValue);
      return;
  }
};

//action button display
// d.scrapeKcnaActionButton.addEventListener("click", changeDisplay);
// d.trackCryptoActionButton.addEventListener("click", changeDisplay);

//drop down click listeners
d.commandListItem.addEventListener("click", changeAdminDisplay);
d.howMuchListItem.addEventListener("click", changeAdminDisplay);
d.itemTypeListItem.addEventListener("click", changeAdminDisplay);
d.uploadTGListItem.addEventListener("click", changeAdminDisplay);

//submit event listener
d.adminSubmitButton.addEventListener("click", adminSubmit);
