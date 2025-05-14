export const parseAdminDataReturn = async (inputData) => {
  console.log("INPUT DATA");
  console.log(inputData);

  //data container for return
  const adminContainer = document.createElement("div");
  adminContainer.className = "admin-container";

  const defaultData = await buildDefaultDisplay(inputData);
  const scrapeData = await buildScrapeDataDisplay(inputData);

  adminContainer.append(defaultData);

  return adminContainer;
};

export const buildDefaultDisplay = async (inputData) => {
  const { text, scrapeId } = inputData;
  const defaultContainer = document.createElement("ul");
  const scrapeElement = document.createElement("li");
  const textElement = document.createElement("li");

  defaultContainer.className = "default-container";

  scrapeElement.innerHTML = `SCRAPE ID: ${scrapeId}`;
  textElement.innerHTML = text;
  defaultContainer.append(scrapeElement, textElement);

  return defaultContainer;
};

export const buildScrapeDataDisplay = async (inputData) => {
  console.log("AHHHHHHHHHHH");
  console.dir(inputData);
};
