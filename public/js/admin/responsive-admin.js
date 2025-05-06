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

const adminDisplayMap = {
  [d.commandType.id]: changeCommandDisplay,
  [d.howMuch.id]: changeHowMuchDisplay,
  [d.itemType.id]: changeItemTypeDisplay,
  [d.uploadTG.id]: changeTGUploadDisplay,
};

for (const button of d.listItemArray) {
  button.addEventListener("click", changeAdminDisplay);
}

//drop down click listeners
// d.commandListItem.addEventListener("click", changeAdminDisplay);
// d.howMuchListItem.addEventListener("click", changeAdminDisplay);
// d.itemTypeListItem.addEventListener("click", changeAdminDisplay);
// d.uploadTGListItem.addEventListener("click", changeAdminDisplay);

//submit event listener
d.adminSubmitButton.addEventListener("click", adminSubmit);
