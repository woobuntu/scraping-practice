const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

(async function main() {
  try {
    const { data: html } = await axios({
      method: "get",
      url: "https://reactnativetutorial.net/css-selectors/",
    });
    fs.writeFileSync("./test.html", html);

    const $ = cheerio.load(html);

    const textOfH1 = $("h1").text();
    console.log(textOfH1);
  } catch (error) {
    throw error;
  }
})();
