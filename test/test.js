const {Builder, By, Key} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

Promise.USE_PROMISE_MANAGER = false;

describe('To do test', function() {
    let driver;

    test.before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    test.it('example', async function theTestFunction() {
        await driver.get('http://localhost:8080/');
        try{
            await driver.findElement(By.className('form-control')).sendKeys('test1', Key.ENTER);
            let element = await driver.findElement(By.linkText('test1'));
            await element.click();
            console.log('Element was added')
        } catch(err) {
            console.log('Element was not added')
        }

        try{
            await driver.findElement(By.linkText('test1'));
            console.log('Element was not deleted')
        } catch(err) {
            console.log('Element was deleted')
        }


    });

    test.after(async function() {
        await driver.quit();
    });
});

// const webdriver = require('selenium-webdriver'),
//     Builder = webdriver.Builder, By = webdriver.By,  KEY = webdriver.Key;
// const test = require('selenium-webdriver/testing');
//
// describe('To do test', function() {
//     let driver;
//
//     test.before(function() {
//         driver = new Builder().forBrowser('chrome').build();
//     });
//
// test.it('example', function theTestFunction() {
//     driver.get('http://localhost:8080/');
//     driver.findElement(By.className('form-control')).sendKeys('test1', KEY.ENTER);
//     driver.findElement(By.linkText('test1'))
//         .then(
//             (elem) => {
//                 console.log('Element was added!');
//                 return Promise.resolve(elem);
//             }
//         ).then(
//             (elem) => elem.click()
//         ).catch(
//             (err) => console.log('Element was not added!')
//         );
//
//     driver.findElement(By.linkText('test1'))
//         .then(
//             () => console.log('Element was not deleted!')
//         ).catch(
//             function (err) {
//                 if (err.name === 'NoSuchElementError'){
//                     console.log('Element was deleted!');
//                 }
//             });
// });
//
//     test.after(function() {
//         driver.quit();
//     });
// });




