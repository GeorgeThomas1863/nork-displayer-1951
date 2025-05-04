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

  //button
  adminSubmitButton: document.getElementById("admin-submit-button"),
};

//add in array to obj
d.listItemArray = [d.commandListItem, d.itemTypeListItem, d.articleTypeListItem];
d.articleTypeArray = [d.allType, d.fatboy, d.topNews, d.latestNews, d.externalNews, d.anecdote, d.people];

export default d;
