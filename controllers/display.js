import { getDefaultData } from "../src/src-main.js";

export const indexDisplay = async (req, res) => {
  const data = await getDefaultData();
  res.render("index", { data: data });
};

export const adminDisplay = (req, res) => {
  res.render("admin");
};

export const display404 = (req, res) => {
  res.status(404).render("404");
};

export const display500 = (error, req, res, next) => {
  console.log(error);
  res.status(500).render("500");
};
