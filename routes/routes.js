import express from "express";

import { indexDisplay, adminDisplay, display404, display500 } from "../controllers/display.js";
import { parseAdminCommand } from "../controllers/commands.js";
// import { parseCommand } from "../src/scrape-parse.js";

const router = express.Router();

//send admin data out
router.post("/admin-submit-route", parseAdminCommand);

// router.post("/scrape-submit-route", parseCommand);

router.get("/", indexDisplay);

router.use("/admin", adminDisplay);

router.use(display404);

router.use(display500);

export default router;
