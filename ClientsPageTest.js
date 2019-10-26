const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage");
const logger = require('./logger');


class ClientsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)

    }

    //on this Test i want to check that existed customer is deleted & to validate this action.
    async deleteClientTest(firstName, lastName) {
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.deleteAndValidateClient(firstName, lastName);

    }

    //on this Test i want to check that system is stability and works good for long time after i operate 2 functions of press rigth / left.
    async clickRightAndLeftArrowStabilityTest(num) {
        for (let i = 0; i < num; i++) {

            await this.clientsPage.navigateToClientsPage()
            await this.clientsPage.clickRightArrow()
            await this.clientsPage.clickRightArrow()
            await this.clientsPage.validateRightClickFunction()
            await this.clientsPage.clickLeftArrow()
            await this.clientsPage.clickLeftArrow()
            await this.clientsPage.validateLeftClickFunction()
        }

    }

    //on this Test i want to check that existed customer is update & to validate this action.
    async updateClientTest(fullName, countryParameter) {
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.updateAndValidateClient(fullName, countryParameter);

    }

    //on this Test i want to check the functionality of Close Button & i want to check if he disappear when i press on him.
    async closeButtonFunctionalityTest(firstName, lastName) {
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.closeButtonFunctionality(firstName, lastName);

    }


}

let clientPageTest = new ClientsPageTest();
clientPageTest.deleteClientTest("Yael", "cohen");// this is Positive Test
logger.warn("this is delete client test")
//clientPageTest.deleteClientTest("%%%%%%" , "&&&&&&&") // this is Negative Test
//clientPageTest.clickRightAndLeftArrowStabilityTest(10); //this is Positive Test
//logger.warn("this is Stability Test of Click Right and Left Arrow Button")
//clientPageTest.clickRightAndLeftArrowStabilityTest(-1); //this is Negative Test
//clientPageTest.updateClientTest("perry cortez" , "brazil") // this is Positive test.
//logger.warn("this is Update Client Test")
//clientPageTest.updateClientTest("&&&&" , "%%%%%%%") // this is Negative Test.

//clientPageTest.closeButtonFunctionalityTest("dani", "cohen") // this is Positive Test.
//logger.warn("This is Close Button Test")
//clientPageTest.closeButtonFunctionalityTest("&&&&&&&&&", "######") // this is Negative Test.