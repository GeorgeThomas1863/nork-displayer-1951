import CONFIG from "../config/config.js";

//sends command to other app
export const sendAdminCommand = async (req, res) => {
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
    console.log("DATA RETURN");
    console.log(data);
    return res.json(data);
  } catch (e) {
    console.log(e);
  }
};
