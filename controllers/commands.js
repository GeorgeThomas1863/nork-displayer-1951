import CONFIG from "../config/display-config.js";

export const parseAdminCommand = async (req, res) => {
  const inputParams = req.body;
  const { route } = inputParams;
  console.log("AHHHHHHHHHHH");
  console.log(req.body);
};
