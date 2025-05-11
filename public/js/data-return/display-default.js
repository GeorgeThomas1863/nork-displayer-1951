export const buildDefaultDisplay = async (inputData) => {
  const defaultContainer = document.createElement("ul");
  const defaultElement = document.createElement("li");

  defaultContainer.className = "empty-container";
  defaultElement.className = "empty-text";

  defaultElement.innerHTML = inputData.text;
  defaultContainer.append(defaultElement);

  return defaultContainer;
};
