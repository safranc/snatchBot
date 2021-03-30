var chai = require('chai');
var chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));
var expect = chai.expect;
loginData = require('../assets/logindata.js')
const verbiage = require('../assets/locale-en.json')

class HealthBotPage {
    constructor() {
        this.myBots = '=My Bots';
        this.healthBot = '//h4';
        this.testBot = '//*[@id="sntch_button"]';
        this.userText1 = '#chat_input'; 
        this.sendBtn = '//i[contains(.,"send")]';
        this.botAnswer1 = '//div[3]/div[2]/div[2]/div/p';
        this.userClick = '//span[contains(.,"Make")]';
        this.botAnswer2 = '//div[5]/div[2]/div[2]/div/p';
        this.userText2 = '//input';
        this.botAnswer3 = '//p[contains(.,"Thank you")]';         
    }

    assertHealthBot () {
        $(this.myBots).click();
        $(this.healthBot).click();
        $(this.testBot).click();
        browser.pause('3000');
        browser.switchToFrame(0);
        $(this.userText1).click();
        $(this.userText1).setValue(verbiage.userValue1);
        $(this.sendBtn).click();


        //expect(browser).toHaveTitle('Dashboard - SnatchBot');
       // expect($(this.title).getText()).to.equal("Dashboard"); 
        expect($(this.botAnswer1).getText()).to.equal(verbiage.botResponse1);
        browser.pause('3000');
        $(this.userClick).click();
        $(this.botAnswer2).scrollIntoView();
        expect($(this.botAnswer2).getText()).to.contain(verbiage.botResponse2);
       
        browser.pause('3000');
        $(this.userText1).click();
        $(this.userText2).setValue(verbiage.userValue2);
        $(this.sendBtn).click();
        $(this.botAnswer3).scrollIntoView();
        expect($(this.botAnswer3).getText()).to.equal(verbiage.botResponse3);
                                                       

    }
}
const instance = new HealthBotPage();
Object.freeze(instance);
module.exports = instance;