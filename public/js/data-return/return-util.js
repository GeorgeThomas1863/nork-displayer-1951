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
