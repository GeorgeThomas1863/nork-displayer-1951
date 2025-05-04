//import modules
import d from "./define-things-admin.js";
import { runArticleTypeDisplay } from "./display-admin.js";
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
  const eventElement = e.target;
  const buttonClickedId = eventElement.id;
  const buttonClickedValue = eventElement.value;

  if (buttonClickedId === d.articlesSelect.id) {
    await runArticleTypeDisplay(buttonClickedValue);
  }
};

//action button display
// d.scrapeKcnaActionButton.addEventListener("click", changeDisplay);
// d.trackCryptoActionButton.addEventListener("click", changeDisplay);

//drop down click listeners
d.scrapeTypeListItem.addEventListener("click", changeArticleTypeDisplay);
d.scrapeToListItem.addEventListener("click", changeArticleTypeDisplay);

//submit event listener
d.submitButton.addEventListener("click", adminSubmit);
