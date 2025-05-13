import CONFIG from "../config/config.js";

//sends command to other app
export const sendAdminCommand = async (inputParams) => {
  try {
    const resAPI = await fetch(CONFIG.apiURL, {
      method: "POST",
      body: JSON.stringify(inputParams),
      headers: {
        "Content-Type": "application/json",
      },
      //per claude fetch is weird with timeouts, prob better to use axios
      headersTimeout: 3 * 60 * 60 * 1000, // 2 hours (60 min × 60 sec × 1000 ms)
    });
    const data = await resAPI.json();
    console.log("DATA RETURN");
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
