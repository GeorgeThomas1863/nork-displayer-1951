export const buildArticleArray = async (inputArray) => {
  if (!inputArray) return null;

  const articleContainer = document.createElement("ul");
  articleContainer.className = "article-container";

  let isFirst = true;

  for (let i = 0; i < inputArray.length; i++) {
    const articleElement = await buildArticleListItem(inputArray[i], isFirst);
    articleContainer.appendChild(articleElement);
    isFirst = false;
  }

  return articleContainer;
};

export const buildArticleListItem = async (inputObj, isFirst) => {
  const articleListItem = document.createElement("li");
  articleListItem.className = "article-list-item";

  const articleElement = await buildArticleElement(inputObj);
  // const articleElementCollapse = await buildCollapseDisplay(inputObj.title, articleElement, isFirst);
  // articleListItem.append(articleElementCollapse);

  //FIX ABOVE
  articleListItem.append(articleElement);

  return articleListItem;
};

export const buildArticleElement = async (inputObj) => {
  const { title, date, text } = inputObj;

  const articleElement = document.createElement("article");
  articleElement.className = "article-element";

  // Create and append title
  const titleElement = await buildTitleElement(title);
  const dateElement = await buildDateElement(date);
  const textElement = await buildTextElement(text);

  articleElement.appendChild(titleElement, dateElement, textElement);

  return articleElement;
};

export const buildTitleElement = async (title) => {
  const titleElement = document.createElement("h2");
  titleElement.className = "article-title";
  titleElement.textContent = title;

  return titleElement;
};

export const buildDateElement = async (date) => {
  // Format and append date
  const dateElement = document.createElement("div");
  dateElement.className = "article-date";
  const dateObj = new Date(date);
  dateElement.textContent = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return dateElement;
};

export const buildTextElement = async (text) => {
  const textElement = document.createElement("div");
  textElement.className = "article-text";

  // Fix line breaks by replacing \n with <br> tags
  const textWithBreaks = text.replace(/\n/g, "<br>");
  textElement.innerHTML = textWithBreaks;

  return textElement;
};
