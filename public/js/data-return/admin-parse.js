export const parseAdminReturn = async (inputObj) => {
  if (!inputObj) return null;
  console.log("INPUT DATA");
  console.log(inputObj);

  // const { statsArray, apiData } = inputObj;
  const { apiData } = inputObj;

  //data container for entire return
  const adminContainer = document.createElement("div");
  adminContainer.className = "admin-container";

  const apiContainer = await buildApiDisplay(apiData);
  const statsContainer = await buildStatsDisplay(inputObj);

  adminContainer.append(apiContainer, statsContainer);

  return adminContainer;
};

export const buildApiDisplay = async (inputData) => {
  // const { text, scrapeId } = inputData;
  const { text } = inputData;
  const apiContainer = document.createElement("ul");
  // const scrapeElement = document.createElement("li");
  const textElement = document.createElement("li");

  apiContainer.className = "api-container";

  // scrapeElement.innerHTML = `SCRAPE ID: ${scrapeId}`;
  textElement.innerHTML = text;
  apiContainer.append(scrapeElement, textElement);

  return apiContainer;
};

export const buildStatsDisplay = async (inputObj) => {
  const { statsArray, apiData } = inputObj;

  if (!statsArray || !statsArray.length) return null;

  //build elements
  const statsContainer = document.createElement("div");
  const scrapeList = document.createElement("ul");
  const totalList = document.createElement("ul");
  const scrapeTitle = document.createElement("h1");
  const totalTitle = document.createElement("h1");

  //add classes
  statsContainer.className = "stats-container";
  scrapeList.className = "scrape-list";
  totalList.className = "total-list";

  //define titles / add to containers
  scrapeTitle.innerHTML = "ITEMS SCRAPED DURING SCRAPE ID: " + apiData.scrapeId;
  totalTitle.innerHTML = "TOTAL ITEMS SCRAPED";
  scrapeList.append(scrapeTitle);
  totalList.append(totalTitle);

  //loop through array
  for (let i = 0; i < statsArray.length; i++) {
    const { keyName, scrapeCount, totalCount } = statsArray[i];

    //create elements
    const scrapeElement = document.createElement("li");
    const totalElement = document.createElement("li");

    //define values
    scrapeElement.innerHTML = `${keyName}: ${scrapeCount}`;
    totalElement.innerHTML = `${keyName}: ${totalCount}`;

    //append shit
    scrapeList.append(scrapeElement);
    totalList.append(totalElement);
  }

  //append both at end to div
  statsContainer.append(scrapeList, totalList);
  return statsContainer;
};
