const d = {
  //wrapper
  adminWrapper: document.getElementById("admin-wrapper"),

  //list items
  commandListItem: document.getElementById("command-list-item"),
  howMuchListItem: document.getElementById("how-much-list-item"),
  urlInputListItem: document.getElementById("url-input-list-item"),
  itemTypeListItem: document.getElementById("item-type-list-item"),
  articleTypeListItem: document.getElementById("article-type-list-item"),
  uploadTGListItem: document.getElementById("upload-tg-list-item"),
  tgIdListItem: document.getElementById("tgId-list-item"),

  //command type
  commandType: document.getElementById("command-type"),
  startScrape: document.getElementById("start-scrape"),
  stopScrape: document.getElementById("stop-scrape"),
  scrapeStatus: document.getElementById("scrape-status"),
  restartAuto: document.getElementById("restart-auto"),

  //how much
  howMuch: document.getElementById("how-much"),
  scrapeNew: document.getElementById("scrape-new"),
  scrapeAll: document.getElementById("scrape-all"),
  scrapeURL: document.getElementById("scrape-url"),

  //url input
  urlInput: document.getElementById("url-input"),

  //item type
  itemType: document.getElementById("item-type"),
  everythingSelect: document.getElementById("everything-select"),
  articlesSelect: document.getElementById("articles-select"),
  picSetsSelect: document.getElementById("picSets-select"),
  vidPagesSelect: document.getElementById("vidPages-select"),

  //article type
  articleType: document.getElementById("item-type"),
  allType: document.getElementById("all-type"),
  fatboy: document.getElementById("fatboy"),
  topNews: document.getElementById("top-news"),
  latestNews: document.getElementById("latest-news"),
  externalNews: document.getElementById("external-news"),
  anecdote: document.getElementById("anecdote"),
  people: document.getElementById("people"),

  //upload TG
  uploadTG: document.getElementById("upload-tg"),
  noTG: document.getElementById("no-tg"),
  yesTG: document.getElementById("yes-tg"),

  //tgId
  tgId: document.getElementById("tgId"),

  //button
  adminSubmitButton: document.getElementById("admin-submit-button"),
};

//add in array to obj
d.listItemArray = [d.commandListItem, d.howMuchListItem, d.urlInputListItem, d.itemTypeListItem, d.articleTypeListItem, d.uploadTGListItem, d.tgIdListItem]; //prettier-ignore
d.articleTypeArray = [d.allType, d.fatboy, d.topNews, d.latestNews, d.externalNews, d.anecdote, d.people];

export default d;
