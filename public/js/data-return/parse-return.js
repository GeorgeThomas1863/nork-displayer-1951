import { buildDefaultDisplay } from "./display-default.js";

export const parseAdminDataReturn = async (inputData) => {
  //data container for return
  const adminContainer = document.createElement("div");
  adminContainer.className = "admin-container";

  const defaultData = await buildDefaultDisplay(inputData);

  adminContainer.append(defaultData);

  return adminContainer;
};
