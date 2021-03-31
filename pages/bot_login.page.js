//var assert = require('chai').assert;
var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var expect = chai.expect;
loginData = require('../assets/logindata.js')
const verbiage = require('../assets/locale-en.json')

class LoginPage {
    constructor() {
        this.email = '[name="email"]';
        this.password = '[name="password"]';
        this.login = '//button[@type="submit"]';
        this.title = '//h2[contains(.,"Dashboard")]'; 
        this.profileName = '.ellipsis-name';          
    }

    assertLogin () {
        //Logging into SnatchBot
        $(this.email).setValue(loginData.username);
        $(this.password).setValue(loginData.password);
        $(this.login).click();
        
       // asserting ProfileName
        expect($(this.profileName).getText()).to.equal(verbiage.profileName);
    }
}
const instance = new LoginPage();
Object.freeze(instance);
module.exports = instance;