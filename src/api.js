import CONFIG from "../config/config.js";

//sends command to other app
export const sendAdminCommand = async (req, res) => {
  const inputParams = req.body;

  //send to other app for parsing
  try {
    const resAPI = await fetch(CONFIG.apiURL, {
      method: "POST",
      body: JSON.stringify(inputParams),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resAPI.json();
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};
