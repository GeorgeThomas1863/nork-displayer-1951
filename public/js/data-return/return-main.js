import d from "../define-things.js";
import { buildArticleArray } from "./return-articles.js";
import { buildPicSetArray } from "./return-pics.js";
import { buildVidPageArray } from "./return-vids.js";

export const parseBackendData = async (inputObj) => {
  if (!inputObj) return null;

  console.log("Processing input data for display");

  const { articles, picSets, vidPages } = inputObj;

  const articleContainer = await buildArticleArray(articles);
  const picSetContainer = await buildPicSetArray(picSets);
  const vidPageContainer = await buildVidPageArray(vidPages);

  const displayObj = {
    parsedArticles: articleContainer,
    parsedPicSets: picSetContainer,
    parsedVidPages: vidPageContainer,
  };

  console.log("ARTICLE CONTAINER");
  console.log(articleContainer);

  return displayObj;

  // // Create a wrapper to hold all data
  // const returnWrapper = document.createElement('div');
  // returnWrapper.className = 'data-return-wrapper';

  // // Add empty state handling
  // if (!articleContainer && !picSetContainer && !vidPageContainer) {
  //   const emptyContainer = document.createElement('div');
  //   emptyContainer.className = 'empty-container';

  //   const emptyText = document.createElement('div');
  //   emptyText.className = 'empty-text';
  //   emptyText.innerHTML = 'No data found<h2>Try a different search</h2>';

  //   emptyContainer.appendChild(emptyText);
  //   returnWrapper.appendChild(emptyContainer);
  // } else {
  //   // Add content that exists
  //   if (articleContainer) {
  //     returnWrapper.appendChild(articleContainer);
  //   }

  //   if (picSetContainer) {
  //     returnWrapper.appendChild(picSetContainer);
  //   }

  //   if (vidPageContainer) {
  //     returnWrapper.appendChild(vidPageContainer);
  //   }
  // }
};
