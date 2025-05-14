export const parseAdminReturn = async (inputObj) => {
  console.log("INPUT DATA");
  console.log(inputObj);

  //data container for return
  const adminContainer = document.createElement("div");
  adminContainer.className = "admin-container";

  // const defaultData = await buildDefaultDisplay(inputData);
  const scrapeData = await buildScrapeStatsDisplay(inputObj);

  // adminContainer.append(scrapeData);

  return adminContainer;
};

// export const buildDefaultDisplay = async (inputData) => {
//   const { text, scrapeId } = inputData;
//   const defaultContainer = document.createElement("ul");
//   const scrapeElement = document.createElement("li");
//   const textElement = document.createElement("li");

//   defaultContainer.className = "default-container";

//   scrapeElement.innerHTML = `SCRAPE ID: ${scrapeId}`;
//   textElement.innerHTML = text;
//   defaultContainer.append(scrapeElement, textElement);

//   return defaultContainer;
// };

export const buildScrapeStatsDisplay = async (inputObj) => {
  if (!inputObj) return null;

  const { statsArray, apiData } = inputObj;

  console.log("STATS ARRAY");
  console.log(statsArray);

  console.log("API DATA");
  console.log(apiData);

  // const scrapeStatsContainer = document.createElement("div");
  // scrapeStatsContainer.className = "scrape-stats-container";

  // for (const key in inputObj) {
  //   const value = inputObj[key];
  //   console.log("FUCK MY BITCH FACE");
  //   console.log(key);
  //   console.log(value);
  // }
};
