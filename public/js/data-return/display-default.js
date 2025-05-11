export const buildDefaultDisplay = async (inputData) => {
  console.log("ALLAHU AKBAR");
  console.log(inputData);
  const defaultContainer = document.createElement("ul");
  const defaultElement = document.createElement("li");

  defaultContainer.className = "empty-container";
  defaultElement.className = "empty-text";

  defaultElement.innerHTML = inputData;
  defaultContainer.append(defaultElement);

  return defaultContainer;
};
