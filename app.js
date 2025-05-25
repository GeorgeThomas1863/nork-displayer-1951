//TO DO

//I FEEL LIKE THIS TAKES LONGER, RATHER THAN DOING IT MYSELF

//FIX COLLAPSE DROPDOWN SO IT DOESNT DUPLOCATE THE TITLE

//FIX IN FUCKING CSS

//ADD IN PICS / PIC SET / VID PAGE SECTIONS

//--------------

//fix base default data return (only 10 items)

//Make admin display return data prettier (all working)

//START ON REGULAR DISPAY

//FIX PROBLEM WITH SCRAPE HEADER STATS??

//MAKE DISPLAY STATS LOOK PRETTY

//REDO MAIN DISPLAY / COMMANDS

//add auth to admin

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import express from "express";
import cors from "cors";
// import session from "express-session";

import CONFIG from "./config/config.js";
import routes from "./routes/routes.js";
// import * as db from "./data/db.js";

const { expressPicPath, picPath, displayPort } = CONFIG;

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

app.use(expressPicPath, express.static(picPath));
app.use(routes);

// app.listen(1801);
app.listen(displayPort);
