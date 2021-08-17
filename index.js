const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

(async function main() {
  try {
    const { data: html } = await axios({
      method: "get",
      url: "https://reactnativetutorial.net/css-selectors/lesson6.html",
    });
    fs.writeFileSync("./test.html", html);

    const $ = cheerio.load(html);

    console.log($("[data-customer='22293']").text());
  } catch (error) {
    throw error;
  }
})();
