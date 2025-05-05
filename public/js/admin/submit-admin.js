import axios from "axios";
import d from "./define-things-admin.js";

export const buildAdminParams = async () => {
  const params = {
    route: "/admin-submit-route",
    commandType: d.commandType.value,
    howMuch: d.howMuch.value,
    urlInput: d.urlInput.value,
    itemType: d.itemType.value,
    articleType: d.articleType.value,
    uploadTG: d.uploadTG.value,
    tgId: d.tgId.value,
  };
  return params;
};

export const sendAdminToBack = async (inputParams) => {
  console.log("INPUT PARAMS");
  console.log(inputParams);
  const route = inputParams.route;
  //send all to backend
  try {
    const res = await axios.post(route, inputParams);
    console.log("RES");
    console.log(res);

    return res.data;
  } catch (e) {
    console.log(ejs);
  }
};
