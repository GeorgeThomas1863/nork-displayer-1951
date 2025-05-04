//import modules
import { hideArray, unhideArray } from "../util.js";
import d from "./define-things-admin.js";
// import { runArticleTypeDisplay } from "./display-admin.js";
// import { buildInputParams, sendToBack } from "./submit.js";

const adminSubmit = async (e) => {
  e.preventDefault();

  console.log("FUCK YOU FAGGOT");

  //   //get input params
  //   const inputParams = await buildInputParams();

  //   //get data
  //   const data = await sendToBack(inputParams);
  //   console.dir(data);

  //   //display data
  //   await displayDataReturn(data);
};

const changeArticleTypeDisplay = async (e) => {
  e.preventDefault();

  const buttonClicked = e.target.value;
  await hideArray([d.articleTypeListItem]);

  //unhide everything

  console.log("AHHHHHHHHH");
  console.log(buttonClicked);

  if (buttonClicked === d.articlesSelect.id) {
    await unhideArray(d.listItemArray);
  }
};

//action button display
// d.scrapeKcnaActionButton.addEventListener("click", changeDisplay);
// d.trackCryptoActionButton.addEventListener("click", changeDisplay);

//drop down click listeners
d.itemTypeListItem.addEventListener("click", changeArticleTypeDisplay);

//submit event listener
d.adminSubmitButton.addEventListener("click", adminSubmit);
