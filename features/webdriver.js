const { Builder, By } = require("selenium-webdriver");
const getDriver = async () => await new Builder().forBrowser("chrome").build();
const url = "localhost:3000";

const getWebdriver = async () => {
  const driver = await getDriver();
  await driver.get(url);
  return driver;
};
module.exports = { getWebdriver, By };
