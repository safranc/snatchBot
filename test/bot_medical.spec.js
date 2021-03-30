const loginPage = require('../pages/bot_login.page.js')
const medicalBot =  require('../pages/bot_medical.page.js')

describe('SnatchBot', () => {
    before( () => {
        browser.url('login')
    });

    it('Login', () => {
        loginPage.assertLogin();
    });
    it('Medical Bot Test', () => {
        medicalBot.assertHealthBot();
    });
})