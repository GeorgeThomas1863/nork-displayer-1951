import sendAdminCommand from "../src/admin.js";

//sends command to other app
export const adminSubmitRoute = async (req, res) => {
  const inputParams = req.body;

  const data = await sendAdminCommand(inputParams);
  return res.json(data);
};
