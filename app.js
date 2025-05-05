//TO DO

//FINISH THE RESPONSIVE ADMIN DISPLAY

//BUILD ADMIN SUBMIT / INPUT PARAMS

//FIGURE OUT HOW TO SEND DATA TO OTHER APP / PORT (point of all this shit)

//REDO MAIN DISPLAY

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import express from "express";
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

app.use(express.static("public"));

app.use(CONFIG.expressPicPath, express.static(CONFIG.picPath));
app.use(routes);

app.listen(1823);
// app.listen(CONFIG.port);
