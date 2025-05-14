export const parseAdminDataReturn = async (inputData) => {
  console.log("INPUT DATA");
  console.log(inputData);

  //data container for return
  const adminContainer = document.createElement("div");
  adminContainer.className = "admin-container";

  // const defaultData = await buildDefaultDisplay(inputData);
  const scrapeData = await buildScrapeStatsDisplay(inputData);

  adminContainer.append(scrapeData);

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

export const buildScrapeStatsDisplay = async (inputData) => {
  // if (!inputData || !inputData.length) return null;

  const scrapeStatsContainer = document.createElement("div");
  scrapeStatsContainer.className = "scrape-stats-container";

  for (let i = 0; i < inputData.length; i++) {
    const [x, y] = inputData[i];
    console.log("AHHHHHHH");
    console.log(x);
    console.log(y);
  }
};
