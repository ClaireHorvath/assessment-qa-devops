const { Builder, Browser, By, until, Key } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("Click 'draw' button to view all 5 bots", async () => {
    await driver.get("http://localhost:3000/");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id("draw")).click();
  });
  test("Clicking 'Add to Duo' adds chosen bot to duo", async () => {
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("")).click();
  })
});
