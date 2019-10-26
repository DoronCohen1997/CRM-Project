const BasePage = require("./BasePage");
const ActionsPage = require("./ActionsPage");
const ClientsPage = require("./ClientsPage");
const logger = require('./logger');



class ActionsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.actionsPage = new ActionsPage(this.testSelenium)
        this.clientsPage = new ClientsPage(this.testSelenium)
    }

    //on this Test i want to check that new client is added & to validate this action.
    async addNewClientAndvalidation(firstName, LastName, Country, Owner, Email) {
        await this.actionsPage.navigateToActionsPage();
        await this.actionsPage.addNewClientTest(firstName, LastName, Country, Owner, Email);
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.searchAndValidateClientName(firstName, LastName);

    }

    //on this Test i want to check that existed client was update with new owner & to validate this action.
    async updateClientOwnerTest(firstName, LastName, Owner) {
        await this.actionsPage.navigateToActionsPage();
        await this.actionsPage.updateClientOwner(firstName, LastName, Owner);
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.searchAndValidateOwner(firstName, LastName, Owner)


    }

    //on this Test i want to check that existed client was update with new emailtype & to validate this action.
    async updateEmailTypeTest(firstName, LastName, Owner) {
        await this.actionsPage.navigateToActionsPage();
        await this.actionsPage.updateClientEmailType(firstName, LastName, Owner);
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.searchAndValidateUpdateEmail(firstName, LastName, Owner);


    }

    //on this Test i want to check that existed client was update with sold parameter & to validate this action.
    async updateSoldParameter(firstName, LastName) {
        await this.actionsPage.navigateToActionsPage();
        await this.actionsPage.updateClientSold(firstName, LastName);
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.searchAndValidatesold(firstName, LastName);

    }
    //on this Test i want to check the result after insert specific input & searchby specific Criteria.
    async searchBySpecificParamAndValidate(input, searchBy) {
        await this.clientsPage.navigateToClientsPage();
        let clientDetails7 = await this.actionsPage.searchAndValidateClient(input, searchBy);
        console.table(clientDetails7);
        if (clientDetails7.length == 0) {
            logger.info("there is No result By Criteria")
        }
        else {
            logger.info("there is result By Criteria")
        }
    }
}

let actionsPageTest = new ActionsPageTest();
//actionsPageTest.addNewClientAndvalidation("Ronit" , "Shalom", "soria" , "Yaffo", "tamidoron97@gmail.com");// this is positive test
//logger.warn("this is add new Client Test");
//actionsPageTest.updateClientOwnerTest("yoram","levi","Janice Alvarado"); // this is positive test
//logger.warn("this is Update Owner Test")
//actionsPageTest.updateclientownerTest("$$$$$" , "&&&&" , "@@@@@" , "*****") // this is negative test
//actionsPageTest.updateEmailTypeTest("Hili", "Cohen" , "B"); // this is positive test
//logger.warn("this is Update EMail Type Test")
//actionsPageTest.updateemailtypeTest("$$$$$" , "@@@@@" , "!!!!!!" , "******") // this is Negative test
actionsPageTest.updateSoldParameter("David" , "cohen") // this is positive test
logger.warn("This is Update Sold Parameter Test")
//actionsPageTest.updateSoldParameter("%%%%%" , "%%%%%%" , "$$$$" , "*******") // this is Negative Test.
//actionsPageTest.searchBySpecificParamAndValidate("france", "country") // this is positive Test
//actionsPageTest.searchBySpecificParamAndValidate("france" , "country")
//logger.warn("this is search and Validate test by Criteria")
//actionsPageTest.searchByCountryAndValidate("Liberia" ,"country");//this is Negative Test

