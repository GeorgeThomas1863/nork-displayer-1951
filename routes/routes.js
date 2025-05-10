import express from "express";

import { indexDisplay, adminDisplay, display404, display500 } from "../controllers/display.js";
import { sendAdminCommand } from "../controllers/admin.js";

const router = express.Router();

//send admin data out
router.post("/admin-submit-route", sendAdminCommand);

// router.post("/scrape-submit-route", parseCommand);

router.get("/", indexDisplay);

router.use("/admin", adminDisplay);

router.use(display404);

router.use(display500);

export default router;
