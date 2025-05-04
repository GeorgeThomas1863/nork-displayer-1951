const d = {
  //wrapper
  adminWrapper: document.getElementById("admin-wrapper"),

  //list items
  commandListItem: document.getElementById("command-list-item"),
  itemTypeListItem: document.getElementById("item-type-list-item"),
  articleTypeListItem: document.getElementById("article-type-list-item"),

  //command type
  commandType: document.getElementById("command-type"),
  startScrape: document.getElementById("start-scrape"),
  stopScrape: document.getElementById("stop-scrape"),
  scrapeStatus: document.getElementById("scrape-status"),

  //article type
  articleType: document.getElementById("item-type"),
  allType: document.getElementById("all-type"),
  fatboy: document.getElementById("fatboy"),
  topNews: document.getElementById("top-news"),
  latestNews: document.getElementById("latest-news"),
  externalNews: document.getElementById("external-news"),
  anecdote: document.getElementById("anecdote"),
  people: document.getElementById("people"),
};

//add in array to obj
// d.listItemArray = [d.urlInputListItem, d.pullNewDataListItem, d.howManyListItem, d.scrapeToListItem, d.tgIdListItem];

export default d;
