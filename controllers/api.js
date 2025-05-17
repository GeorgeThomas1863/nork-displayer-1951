import { runAdminSubmit } from "../src/src-admin.js";
import { getDefaultData } from "../src/src-main.js";

//sends command to other app
export const adminSubmitRoute = async (req, res) => {
  try {
    const inputParams = req.body;

    const data = await runAdminSubmit(inputParams);
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to process admin command" });
  }
};

//gets default data from FRONT END
export const getDefaultDataRoute = async (req, res) => {
  try {
    const data = await getDefaultData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get default data" });
  }
};
