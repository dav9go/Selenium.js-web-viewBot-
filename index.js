const { Builder } = require("selenium-webdriver");
const {
  getAllPageButtons,
  clickButtonByText,
  getAllItems,
  writeInItemAndEnter,
} = require("./functions");

const SEARCH = "https://google.com";

async function init() {
  //Init webdriver
  const driver = await new Builder().forBrowser("firefox").build();

  //Open search engine
  await driver.get(SEARCH);

  //Obtain all buttons
  const buttonsArray = await getAllPageButtons(driver);

  //Click reject all cookies
  await clickButtonByText(buttonsArray, "Rechazar todo");

  //Obtain all textareas
  const textAreasArray = await getAllItems(driver, "textarea");

  //Write in search engine textarea
  await writeInItemAndEnter(
    textAreasArray,
    "class",
    "gLFyf",
    "Las 5 Tendencias en Diseño Web del 2024 visionxdesign",
    true
  );
}

init();
