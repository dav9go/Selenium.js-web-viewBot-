//Functions
const { By, Key } = require("selenium-webdriver");

async function getAllPageButtons(driver) {
  return await driver.findElements(By.tagName("button"));
}

async function clickButtonByText(buttonsArray, text) {
  for (const button of buttonsArray) {
    const buttonText = await button.getText();
    if (buttonText === text) {
      button.click();
      break;
    }
  }
}

async function getAllItems(driver, tag) {
  return await driver.findElements(By.tagName(tag));
}

async function writeInItemAndEnter(
  itemsArray,
  attribute,
  attributeContent,
  text,
  clickOnIt
) {
  for (const item of itemsArray) {
    const result = await item.getAttribute(attribute);
    if (result === attributeContent) {
      if (clickOnIt) {
        await item.sendKeys(text, Key.ENTER);
      } else {
        await item.sendKeys(text);
      }
      break;
    }
  }
}

module.exports = {
  getAllPageButtons,
  clickButtonByText,
  getAllItems,
  writeInItemAndEnter,
};
