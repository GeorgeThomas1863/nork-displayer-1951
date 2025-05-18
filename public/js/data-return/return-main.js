export const parseDefaultData = async (inputObj) => {
  if (!inputObj) return null;

  console.log("!!!!!INPUT DATA");
  console.log(inputObj);

  const { articles, picSets, vidPages } = inputObj;

  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";
};
