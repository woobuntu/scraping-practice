const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");

(async function main() {
  try {
    const { data: html } = await axios({
      method: "get",
      url: "https://www.codingwithstefan.com/table-example/",
    });

    const $ = cheerio.load(html);

    const rowsInTable = $("body > table > tbody > tr");

    const tableHeaders = [];

    const scrapedRows = rowsInTable
      .map((index, tableRow) => {
        if (index == 0) {
          tableHeaders.push(
            ...$(tableRow)
              .find("th")
              .map((i, th) => $(th).text())
              .toArray()
          );
          return;
        }

        const tableDatas = $(tableRow)
          .find("td")
          .map((i, td) => $(td).text())
          .toArray();

        return tableHeaders.reduce(
          (obj, th, index) => ((obj[th] = tableDatas[index]), obj),
          {}
        );
      })
      .toArray();
    console.log(scrapedRows);
  } catch (error) {
    throw error;
  }
})();
