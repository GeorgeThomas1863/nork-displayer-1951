//Defines all frontend dom elements, puts elements into obj for easier seleciton
const d = {
  //action buttons
  scrapeKcnaActionButton: document.getElementById("scrape-kcna-action-button"),
  trackCryptoActionButton: document.getElementById("track-crypto-action-button"),

  //wrapper
  scraperWrapper: document.getElementById("scraper-wrapper"),
  adminWrapper: document.getElementById("admin-wrapper"),

  //MAIN list items
  scrapeTypeListItem: document.getElementById("scrape-type-list-item"),
  pullNewDataListItem: document.getElementById("new-data-list-item"),
  urlInputListItem: document.getElementById("url-input-list-item"),
  howManyListItem: document.getElementById("how-many-list-item"),
  scrapeToListItem: document.getElementById("scrape-to-list-item"),
  tgIdListItem: document.getElementById("tgId-list-item"),

  //ADMIN LIST ITEMS
  adminCommandListItem: document.getElementById("admin-command-list-item"),
  adminHowMuchListItem: document.getElementById("admin-how-much-list-item"),
  adminUrlInputListItem: document.getElementById("admin-url-input-list-item"),
  adminItemTypeListItem: document.getElementById("admin-item-type-list-item"),
  adminArticleTypeListItem: document.getElementById("admin-article-type-list-item"),
  adminUploadTGListItem: document.getElementById("admin-upload-tg-list-item"),
  adminTgIdListItem: document.getElementById("admin-tgId-list-item"),

  //MAIN COMMANDS
  // scrapeType: document.getElementById("scrape-type"),
  // scrapeBoth: document.getElementById("scrape-both"),
  // scrapePics: document.getElementById("scrape-pics"),
  // scrapeArticles: document.getElementById("scrape-articles"),
  // scrapeURL: document.getElementById("scrape-url"),
  // restartAuto: document.getElementById("restart-auto"),

  // scrapeTo: document.getElementById("scrapeTo"),
  // displayHere: document.getElementById("displayHere"),
  // displayTG: document.getElementById("displayTG"),

  // pullNewData: document.getElementById("pullNewData"),
  // noNewData: document.getElementById("noNewData"),
  // yesNewData: document.getElementById("yesNewData"),

  // urlInput: document.getElementById("urlInput"),
  // howMany: document.getElementById("howMany"),
  // tgId: document.getElementById("tgId"),

  //ADMIN COMMANDS

  //command type
  adminCommandType: document.getElementById("admin-command-type"),
  adminStartScrape: document.getElementById("admin-start-scrape"),
  adminStopScrape: document.getElementById("admin-stop-scrape"),
  adminScrapeStatus: document.getElementById("admin-scrape-status"),
  adminRestartAuto: document.getElementById("admin-restart-auto"),

  //how much
  adminHowMuch: document.getElementById("admin-how-much"),
  adminScrapeNew: document.getElementById("admin-scrape-new"),
  adminScrapeAll: document.getElementById("admin-scrape-all"),
  adminScrapeURL: document.getElementById("admin-scrape-url"),

  //url input
  adminUrlInput: document.getElementById("admin-url-input"),

  //item type
  adminItemType: document.getElementById("admin-item-type"),
  adminEverythingSelect: document.getElementById("admin-everything-select"),
  adminArticlesSelect: document.getElementById("admin-articles-select"),
  adminPicSetsSelect: document.getElementById("admin-picSets-select"),
  adminVidPagesSelect: document.getElementById("admin-vidPages-select"),

  //article type
  adminArticleType: document.getElementById("admin-item-type"),
  adminAllType: document.getElementById("admin-all-type"),
  adminFatboy: document.getElementById("admin-fatboy"),
  adminTopNews: document.getElementById("admin-top-news"),
  adminLatestNews: document.getElementById("admin-latest-news"),
  adminExternalNews: document.getElementById("admin-external-news"),
  adminAnecdote: document.getElementById("admin-anecdote"),
  adminPeople: document.getElementById("admin-people"),

  //upload TG
  adminUploadTG: document.getElementById("admin-upload-tg"),
  adminNoTG: document.getElementById("admin-no-tg"),
  adminYesTG: document.getElementById("admin-yes-tg"),

  //tgId
  adminTgId: document.getElementById("admin-tgId"),

  //submit buttons
  submitButton: document.getElementById("submit-button"),
  adminSubmitButton: document.getElementById("admin-submit-button"),

  //DATA RETURN WRAPPERS
  dataReturnWrapper: document.getElementById("data-return-wrapper"),
  dataReturnElement: document.getElementById("data-return-element"),
  adminDataReturnWrapper: document.getElementById("admin-data-return-wrapper"),
  adminDataReturnElement: document.getElementById("admin-data-return-element"),

  //DATA RETURN ELEMENTS
  articleDataReturnElement: document.getElementById("article-data-return-element"),
  picSetDataReturnElement: document.getElementById("pic-set-data-return-element"),
  vidPageDataReturnElement: document.getElementById("vid-page-data-return-element"),
};

//add in MAIN array to obj
d.mainListItemArray = [d.urlInputListItem, d.pullNewDataListItem, d.howManyListItem, d.scrapeToListItem, d.tgIdListItem];

//add in ADMIN array to obj
d.adminListItemArray = [d.adminCommandListItem, d.adminHowMuchListItem, d.adminUrlInputListItem, d.adminItemTypeListItem, d.adminArticleTypeListItem, d.adminUploadTGListItem, d.adminTgIdListItem]; //prettier-ignore
d.adminDisplayItemsArray = [d.adminCommandType, d.adminHowMuch, d.adminItemType, d.adminUploadTG];
d.adminArticleTypeArray = [d.adminAllType, d.adminFatboy, d.adminTopNews, d.adminLatestNews, d.adminExternalNews, d.adminAnecdote, d.adminPeople];

export default d;
