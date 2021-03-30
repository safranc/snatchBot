const loginPage = require('../pages/bot_login.page.js')

describe('SnatchBot', () => {
    before( () => {
        browser.url('login')
    });

    it('Login', () => {
        loginPage.assertLogin();
    });
})