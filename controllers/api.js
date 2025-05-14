import { runAdminSubmit } from "../src/src-admin.js";

//sends command to other app
export const adminSubmitRoute = async (req, res) => {
  const inputParams = req.body;

  const data = await runAdminSubmit(inputParams);
  console.log("FUCKING DATA");
  console.log(data);
  return res.json(data);
};
