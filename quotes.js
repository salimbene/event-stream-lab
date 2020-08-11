const axios = require("axios");

async function getQuotes() {
  const { data } = await axios({
    methor: "get",
    url:
      "https://the-one-api.herokuapp.com/v1/character/5cd99d4bde30eff6ebccfea0/quote",
    headers: { Authorization: `Bearer wRut8YgdShGbLHWJIijw` },
  });
  const { docs } = data;

  return docs;
}

module.exports.getQuotes = getQuotes;

// console.log("quote:", dialog);
// const quoteIndex = Math.floor(Math.random() * docs.length);
// const { dialog } = docs[quoteIndex];
