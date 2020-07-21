const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
const { Builder, By } = require("selenium-webdriver");
const getDriver = async () => await new Builder().forBrowser("chrome").build();
const url = "localhost:3000";

const getWebdriver = async () => {
  const driver = await getDriver();
  await driver.get(url);
  return driver;
};
module.exports = { getWebdriver, By };
