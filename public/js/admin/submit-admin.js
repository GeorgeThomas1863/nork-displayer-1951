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
  const { route } = inputParams;

  //send all to backend
  try {
    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(inputParams),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json(); 
    return data;
  } catch (error) {
    console.log(error);
  }
};
