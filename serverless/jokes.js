const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = "https://icanhazdadjoke.com/";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const jsonJoke = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(jsonJoke),
    };
  } catch (error) {
    return { statusCode: 422, body: error.stack };
  }
};
