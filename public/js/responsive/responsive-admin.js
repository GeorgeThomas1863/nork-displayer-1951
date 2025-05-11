//import modules
// import { hideArray, unhideArray } from "../util.js";
import d from "../define-things.js";
import { adminCommandDisplay, adminHowMuchDisplay, adminItemTypeDisplay, adminTGUploadDisplay, displayAdminReturn } from "./display-admin.js";
import { buildAdminParams, sendToBack } from "../util.js";

const adminSubmit = async (e) => {
  e.preventDefault();

  //get input params
  const adminParams = await buildAdminParams();

  //get data
  const adminData = await sendToBack(adminParams);

  //display it (remove variable name)
  const displayData = await displayAdminReturn(adminData);
  console.log(displayData);

  return "DONE";
};

//---------

const changeAdminDisplay = async (e) => {
  e.preventDefault();
  const eventElement = e.target;
  const buttonClickedId = eventElement.id;
  const buttonClickedValue = eventElement.value;

  if (adminDisplayMap[buttonClickedId]) {
    await adminDisplayMap[buttonClickedId](buttonClickedValue);
    return;
  }
};

//build map
const adminDisplayMap = {};
const displayFunctionsArray = [adminCommandDisplay, adminHowMuchDisplay, adminItemTypeDisplay, adminTGUploadDisplay];
for (let i = 0; i < d.displayItemsArray.length; i++) {
  adminDisplayMap[d.displayItemsArray[i].id] = displayFunctionsArray[i];
}

//click listeners for responsive display
for (const button of d.displayItemsArray) {
  button.addEventListener("click", changeAdminDisplay);
}

//submit event listener
d.adminSubmitButton.addEventListener("click", adminSubmit);
