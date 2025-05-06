import CONFIG from "../config/display-config.js";

export const parseAdminCommand = async (req, res) => {
  //send to other app for parsing
  try {
    const resAPI = await fetch(CONFIG.apiURL, {
      method: "POST",
      body: JSON.stringify(req.body),
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
