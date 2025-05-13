import { runAdminSubmit } from "../src/admin.js";

//sends command to other app
export const adminSubmitRoute = async (req, res) => {
  const inputParams = req.body;

  const data = await runAdminSubmit(inputParams);
  return res.json(data);
};
