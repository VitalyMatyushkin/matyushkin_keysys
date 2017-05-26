const webdriver = require('selenium-webdriver'),
    Builder = webdriver.Builder, By = webdriver.By,  KEY = webdriver.Key;
const test = require('selenium-webdriver/testing');

describe('To do test', function() {
    var driver;

    test.before(function() {
        driver = new Builder().forBrowser('chrome').build();
    });

    test.it('example', function theTestFunction() {
        driver.get('http://localhost:8080/');
        driver.findElement(By.className('form-control')).sendKeys('test1', KEY.ENTER);
        driver.findElement(By.className('list-group-item')).then(
            console.log('Element was added!')
        );

        driver.findElement(By.className('list-group-item')).click();
        driver.findElement(By.className('list-group-item')).then(true,
            function (err) {
                if (err.name === 'NoSuchElementError'){
                    console.log('Element was deleted!');
            }
        });
    });

    test.after(function() {
        driver.quit();
    });
});



