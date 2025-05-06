//import modules
// import { hideArray, unhideArray } from "../util.js";
import d from "./define-things-admin.js";
import { changeCommandDisplay, changeHowMuchDisplay, changeItemTypeDisplay, changeTGUploadDisplay } from "./display-admin.js";
import { buildAdminParams, sendAdminToBack } from "./submit-admin.js";

const adminSubmit = async (e) => {
  e.preventDefault();

  //get input params
  const adminParams = await buildAdminParams();

  //get data
  const adminData = await sendAdminToBack(adminParams);
  console.log("ADMIN DATA");
  console.log(adminData);

  return adminData;
};

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
const displayFunctionsArray = [changeCommandDisplay, changeHowMuchDisplay, changeItemTypeDisplay, changeTGUploadDisplay];
for (let i = 0; i < d.displayItemsArray.length; i++) {
  adminDisplayMap[d.displayItemsArray[i].id] = displayFunctionsArray[i];
}

//click listeners for responsive display
for (const button of d.displayItemsArray) {
  button.addEventListener("click", changeAdminDisplay);
}

//submit event listener
d.adminSubmitButton.addEventListener("click", adminSubmit);
