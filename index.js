const targetUrl = "https://www.entrerios.gov.ar/dgrrhh/index.php?i=7";

const axios = require("axios");
const cheerio = require("cheerio");
const parser = require("./parser.js");

axios
  .get(targetUrl)
  .then((response) => {
    const $ = cheerio.load(response.data);
    const holidays = parser($);
    console.log({ holidays });
  })
  .catch((error) => {
    console.log(error);
  });
