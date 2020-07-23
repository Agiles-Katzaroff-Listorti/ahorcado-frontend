const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/guess.feature");
const {getWebdriver, By} = require("./webdriver")
jest.setTimeout(60000);

defineFeature(feature, (test) => {
  test("Guess a word correctly", ({ given, when, then }) => {
    const driverPromise = getWebdriver();
    given("I set testpepito as nick", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElements(By.id("nick"))
          .then((found) => !!found.length);
      }, 5000);
      const input = await driver.findElement(By.id("nick"));
      input.sendKeys("testpepito");
      const button = await driver.findElement(By.id("loginBtn"));
      button.click();
    });
    given("start a game", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElements(By.id("startBtn"))
          .then((found) => !!found.length);
      }, 5000);
      const button = await driver.findElement(By.id("startBtn"));
      button.click();
    });

    when("I guess pepito", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElements(By.id("guessWordBtn"))
          .then((found) => !!found.length);
      }, 5000);
      const input = await driver.findElement(By.id("guessWordInput"));
      input.sendKeys("pepito");
      const button = await driver.findElement(By.id("guessWordBtn"));
      button.click();
    });

    then("I should win", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElement(By.xpath(`//*[@id="root"]/div/div/div/div[1]`))
          .then((found) =>
            found.getText().then((text) => text.includes("Ganaste"))
          );
      }, 5000);
      await driver.close();
    });
  });

  test("Guess a word incorrectly", ({ given, when, then }) => {
    const driverPromise = getWebdriver();
    given("I set test-pepito as nick", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElements(By.id("nick"))
          .then((found) => !!found.length);
      }, 5000);
      const input = await driver.findElement(By.id("nick"));
      input.sendKeys("test-pepito");
      const button = await driver.findElement(By.id("loginBtn"));
      button.click();
    });
    given("start a game", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElements(By.id("startBtn"))
          .then((found) => !!found.length);
      }, 5000);
      const button = await driver.findElement(By.id("startBtn"));
      button.click();
    });

    when("I guess pepe", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElements(By.id("guessWordBtn"))
          .then((found) => !!found.length);
      }, 5000);
      const input = await driver.findElement(By.id("guessWordInput"));
      input.sendKeys("pepe");
      const button = await driver.findElement(By.id("guessWordBtn"));
      button.click();
    });

    then("I should lose", async () => {
      const driver = await driverPromise;
      await driver.wait(function () {
        return driver
          .findElement(By.xpath(`//*[@id="root"]/div/div/div/div[1]`))
          .then((found) =>
            found.getText().then((text) => text.includes("Perdiste"))
          );
      }, 5000);
      await driver.close();
    });
  });
});
