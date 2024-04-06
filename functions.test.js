const {
  getAllPageButtons,
  clickButtonByText,
  getAllItems,
  writeInItemAndEnter,
} = require("./functions.js");
const { Builder, By } = require("selenium-webdriver");

describe("getAllPageButtons", () => {
  it("should return an array of buttons", async () => {
    const driver = await new Builder().forBrowser("firefox").build();
    const buttonsArray = await getAllPageButtons(driver);
    expect(Array.isArray(buttonsArray)).toBe(true);
  });
});

describe("clickButtonByText", () => {
  it("should click the button with the specified text", async () => {
    const mockButton = {
      getText: jest.fn().mockResolvedValue("Rechazar todo"),
      click: jest.fn().mockResolvedValue(),
    };

    await clickButtonByText([mockButton], "Rechazar todo");

    expect(mockButton.getText).toHaveBeenCalled();
    expect(mockButton.click).toHaveBeenCalled();
  });
});
