const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

(async function main() {
  try {
    const { data: html } = await axios({
      method: "get",
      url: "https://reactnativetutorial.net/css-selectors/lesson2.html",
    });
    fs.writeFileSync("./test.html", html);

    const $ = cheerio.load(html);

    const listOfH2 = $("h2");
    listOfH2.each((index, element) => console.log($(element).text()));
  } catch (error) {
    throw error;
  }
})();
