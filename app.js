//TO DO

//PARSE ADMIN COMMANDS IN SCRAPER

//REDO MAIN DISPLAY / COMMANDS

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import express from "express";
import cors from "cors";
// import session from "express-session";

import CONFIG from "./config/display-config.js";
import routes from "./routes/routes.js";
// import * as db from "./data/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set("views", join(__dirname, "html"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic usage - allows all origins
app.use(cors());

// CONFIGURE BELOW LATER
// app.use(cors({
//   origin: 'http://localhost:1951', // Allow only the display app
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use(express.static("public"));

app.use(CONFIG.expressPicPath, express.static(CONFIG.picPath));
app.use(routes);

app.listen(1951);
// app.listen(CONFIG.port);
