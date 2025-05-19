export const parseDefaultData = async (inputObj) => {
  if (!inputObj) return null;

  console.log("!!!!!INPUT DATA");
  console.log(inputObj);

  const { articles, picSets, vidPages } = inputObj;

  await parseArticleArray(articles);

  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";
};

export const parseArticleArray = async (inputArray) => {
  if (!inputArray) return null;

  const articleContainer = document.createElement("div");
  articleContainer.className = "article-container";

  for (let i = 0; i < inputArray.length; i++) {
    const articleElement = await parseArticleElement(inputArray[i]);

    // articleContainer.appendChild(articleElement);
  }
};

export const parseArticleElement = async (inputObj) => {
  if (!inputObj) return null;
  const { url, date, text, title, articleType, articleId, picArray } = inputObj;

  const picData = await parsePicArray(picArray);

  const articleElement = document.createElement("div");
  articleElement.className = "article-element";
  articleElement.innerHTML = text;
};

export const parsePicArray = async (inputArray) => {
  console.log("BUILD");
};
