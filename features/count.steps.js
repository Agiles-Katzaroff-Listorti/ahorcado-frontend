const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./features/count.feature');
const { getWebdriver, By } = require('./webdriver');
jest.setTimeout(60000);

defineFeature(feature, test => {
    test('Count 3 correct games', ({ given, when, then }) => {
        const driverPromise = getWebdriver();
        given('I set test-pepito as nick', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('nick'))
                    .then(found => !!found.length);
            }, 5000);
            const input = await driver.findElement(By.id('nick'));
            input.sendKeys('test-pepito');
            const button = await driver.findElement(By.id('loginBtn'));
            button.click();
        });
        given('start a game', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('startBtn'))
                    .then(found => !!found.length);
            }, 5000);
            const button = await driver.findElement(By.id('startBtn'));
            button.click();
        });

        when('I guess pepito', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('guessWordBtn'))
                    .then(found => !!found.length);
            }, 5000);
            const input = await driver.findElement(By.id('guessWordInput'));
            input.sendKeys('pepito');
            const button = await driver.findElement(By.id('guessWordBtn'));
            button.click();
        });

        when('restart the game', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('startBtn'))
                    .then(found => !!found.length);
            }, 5000);
            const button = await driver.findElement(By.id('startBtn'));
            button.click();
        });

        when('I guess pepito', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('guessWordBtn'))
                    .then(found => !!found.length);
            }, 5000);
            const input = await driver.findElement(By.id('guessWordInput'));
            input.sendKeys('pepito');
            const button = await driver.findElement(By.id('guessWordBtn'));
            button.click();
        });

        when('restart the game', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('startBtn'))
                    .then(found => !!found.length);
            }, 5000);
            const button = await driver.findElement(By.id('startBtn'));
            button.click();
        });

        when('I guess pepito', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('guessWordBtn'))
                    .then(found => !!found.length);
            }, 5000);
            const input = await driver.findElement(By.id('guessWordInput'));
            input.sendKeys('pepito');
            const button = await driver.findElement(By.id('guessWordBtn'));
            button.click();
        });

        then('I should get 3 correct games', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElements(By.id('count'))
                        .then((found) => !!found.length);
            }, 5000);
            const message = await driver.findElement(By.id('count'));
            const text = await message.getText()
            expect(text).toBe("Llevás 3 de 3 partidas ganadas.")
            await driver.close();
        });
    });
});
