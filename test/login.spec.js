const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url("http://localhost:8080/admin#/login");
});

test('на странице есть кнопка "Отправить"', () => {
    return client
        .isExisting(".auth__submit")
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(
                    `./screenshots/auth_submit_btn${browserName}_exists.png`,
                    browsers[browserName].value,
                    "base64"
                );
            }
        });
});

test('на странице есть все необходимые поля"', () => {
    return client
        .isExisting("#login")
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .isExisting("#password")
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(
                    `./screenshots/all_need_input_${browserName}_exists.png`,
                    browsers[browserName].value,
                    "base64"
                );
            }
        });
});

test('Кнопка "Отправить" заблокирована до тех пор, пока не введены все необходимые данные', () => {
    return client
        .click('.auth__submit')
        .pause(500)
        .getAttribute('.auth__submit', 'disable')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe("true");
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/disable_submit_${browserName}_all_empty`, screenshots[browserName].value, 'base64');
            }
        })
        .addValue('#login', 'test')
        .pause(500)
        .getAttribute('.auth__submit', 'disable')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe("true");
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/disable_submit_${browserName}_password_empty.png`, screenshots[browserName].value, 'base64');
            }
        })
        .addValue('#password', 'test')
        .pause(500)
        .getAttribute('.auth__submit', 'disable')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe("");
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/disable_submit_${browserName}_all_input.png`, screenshots[browserName].value, 'base64');
            }
        })
});

afterAll(() => {
    return client.end();
});
