const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const port = 3000;

async function htmlToPdf(htmlContentResume) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContentResume);
  const pdfResumeBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  return pdfResumeBuffer;
}

const htmlContentResume = ``;

const newh = async () => {
  const pdfResumeBuffer = await htmlToPdf(htmlContentResume);
  console.log(pdfResumeBuffer);
};

newh();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
