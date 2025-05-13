export const parseAdminDataReturn = async (inputData) => {
  const { data } = inputData;

  console.log("INPUT DATA");
  console.log(data);

  //data container for return
  const adminContainer = document.createElement("div");
  adminContainer.className = "admin-container";

  const defaultData = await buildDefaultDisplay(data);

  adminContainer.append(defaultData);

  return adminContainer;
};

export const buildDefaultDisplay = async (inputData) => {
  const defaultContainer = document.createElement("ul");
  const defaultElement = document.createElement("li");

  defaultContainer.className = "empty-container";
  defaultElement.className = "empty-text";

  defaultElement.innerHTML = inputData;
  defaultContainer.append(defaultElement);

  return defaultContainer;
};
