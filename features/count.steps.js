const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./features/count.feature');
const { getWebdriver, By } = require('./webdriver');
jest.setTimeout(60000);

defineFeature(feature, test => {
    test('Count 3 games', ({ given, when, then }) => {
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

        then('I should get a 3', async () => {
            const driver = await driverPromise;
            await driver.wait(function () {
                return driver
                    .findElement(By.id('count'))
                    .then(found =>
                        found
                            .getText()
                            .then(text => text.includes('3 partidas ganadas.'))
                    );
            }, 5000);
            await driver.close();
        });
    });
});
