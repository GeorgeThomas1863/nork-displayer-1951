export const parseAdminReturn = async (inputObj) => {
  if (!inputObj) return null;
  console.log("INPUT DATA");
  console.log(inputObj);

  const { statsArray, apiData } = inputObj;

  //data container for entire return
  const adminContainer = document.createElement("div");
  adminContainer.className = "admin-container";

  const apiContainer = await buildApiDisplay(apiData);
  const statsContainer = await buildStatsDisplay(statsArray);

  adminContainer.append(apiContainer, statsContainer);

  return adminContainer;
};

export const buildApiDisplay = async (inputData) => {
  const { text, scrapeId } = inputData;
  const apiContainer = document.createElement("ul");
  const scrapeElement = document.createElement("li");
  const textElement = document.createElement("li");

  apiContainer.className = "api-container";

  scrapeElement.innerHTML = `SCRAPE ID: ${scrapeId}`;
  textElement.innerHTML = text;
  apiContainer.append(scrapeElement, textElement);

  return apiContainer;
};

export const buildStatsDisplay = async (inputArray) => {
  if (!inputArray || !inputArray.length) return null;

  //build container elements
  const statsContainer = document.createElement("div");
  const scrapeList = document.createElement("ul");
  const totalList = document.createElement("ul");

  //add classes
  statsContainer.className = "stats-container";
  scrapeList.className = "scrape-list";
  totalList.className = "total-list";

  //loop through array
  for (let i = 0; i < inputArray.length; i++) {
    const { keyName, scrapeCount, totalCount } = inputArray[i];

    //create elements
    const scrapeElement = document.createElement("li");
    const totalElement = document.createElement("li");

    //define values
    scrapeElement.innerHTML = `${keyName}: ${scrapeCount}`;
    totalElement.innerHTML = `${keyName}: ${totalCount}`;

    //append shit
    scrapeList.append(scrapeElement);
    totalList.append(totalElement);

    // //extract text
    // if (k.includes("_scrape")) {
    //   scrapeElement.innerHTML = `${k} : ${dataObj[k]}`;
    //   scrapeList.append(scrapeElement);
    // }

    // if (k.includes("_total")) {
    //   totalElement.innerHTML = `${k} : ${dataObj[k]}`;
    //   totalList.append(totalElement);
    // }
  }
  // console.log("SCRAPE LIST");
  // console.log(scrapeList);

  //append both at end to div
  statsContainer.append(scrapeList, totalList);
  // statsContainer.append(totalList);
  return statsContainer;
};
