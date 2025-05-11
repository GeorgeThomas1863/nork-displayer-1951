import d from "./define-things.js";

export const hideArray = async (inputs) => {
  for (const input of inputs) {
    input.classList.add("hidden");
  }
};

export const unhideArray = async (inputs) => {
  for (const input of inputs) {
    input.classList.remove("hidden");
    // input.classList.remove("#fuck-forms li.hidden");
  }
};

//-------------

export const buildAdminParams = async () => {
  const params = {
    route: "/admin-submit-route",
    commandType: d.adminCommandType.value,
    howMuch: d.adminHowMuch.value,
    urlInput: d.adminUrlInput.value,
    itemType: d.adminItemType.value,
    articleType: d.adminArticleType.value,
    uploadTG: d.adminUploadTG.value,
    tgId: d.adminTgId.value,
  };
  return params;
};

export const buildMainParams = async () => {
  console.log("FUCKING BUILD");
};

export const sendToBack = async (inputParams) => {
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
