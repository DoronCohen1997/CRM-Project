const BasePage = require("./BasePage");
const AnalyticsPage = require("./AnalyticsPage");
const ClientsPage = require("./ClientsPage");
const ActionsPage = require("./ActionsPage");
const logger = require('./logger');

class AnalyticsTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.analyticsPage = new AnalyticsPage(this.testSelenium)
        this.clientsPage = new ClientsPage(this.testSelenium)
        this.actionsPage = new ActionsPage(this.testSelenium)

    }

    //on this Test i want to check that color change after press "Color" Button.
    async changeColorTest() {
        await this.analyticsPage.navigateToAnalyticsPage();
        await this.analyticsPage.changecolorvalidation()

    }

    //on this Test i want to check the reliability of Analytics Emails Send Parameter.
    async UpdateAndCheckEmailsParam(firstName, LastName, Country, Owner, Email) {

        await this.clientsPage.navigateToClientsPage();

        let result2 = await this.clientsPage.searchAndCountClientEmailType("A", "Email Type");

        await this.clientsPage.navigateToClientsPage();

        let result3 = await this.clientsPage.searchAndCountClientEmailType("B", "Email Type");

        await this.clientsPage.navigateToClientsPage();

        let result4 = await this.clientsPage.searchAndCountClientEmailType("C", "Email Type");

        await this.clientsPage.navigateToClientsPage();

        let result5 = await this.clientsPage.searchAndCountClientEmailType("D", "Email Type");

        let totalResultMail = result5 + result4 + result3 + result2;
        logger.info(totalResultMail);

        await this.actionsPage.navigateToActionsPage();

        await this.actionsPage.addNewClientTest(firstName, LastName, Country, Owner, Email);

        await this.actionsPage.updateClientEmailType(firstName, LastName,"C");

        await this.analyticsPage.navigateToAnalyticsPage();

        let result6 = await this.analyticsPage.getEmailsSentParameter();

        logger.info(result6);

        let totalResult = result6 - totalResultMail;

        if (totalResult == 1) {

            logger.info("Analytics Emails Send Param work good")

        }
        else {
            logger.warn("Analytics Emails Send Param not work as Expected")
        }

    }

    //on this Test i want to check the reliability of Analytics Outstanding Clients Parameter.
    async UpdateAndCheckOutstandingClientsParam(firstName, LastName, Country, Owner, Email) {

        await this.clientsPage.navigateToClientsPage();

        let result4 = await this.clientsPage.searchAndCountSold("NO", "Sold");

        await this.actionsPage.navigateToActionsPage();

        await this.actionsPage.addNewClientTest(firstName, LastName, Country, Owner, Email);

        await this.actionsPage.updateClientSold(firstName, LastName);

        await this.analyticsPage.navigateToAnalyticsPage();

        let result5 = await this.analyticsPage.getOutstandingClientsParameter();

        logger.info(result5);

        let totalResult = result5 - result4;

        if (totalResult == 1) {

            logger.info("Analytics Outstanding Clients Param work good")

        }
        else {
            logger.warn("Analytics Outstanding Clients Param not work as Expected")
        }
    }
}


let analyticsTest = new AnalyticsTest();
//analyticsTest.changeColorTest();
//logger.warn("this is Test that Verify that color is Change after Press on Color Button")
//analyticsTest.UpdateAndCheckEmailsParam("Esti", "cohen", "Poland", "Beer-sheva", "tami444@gmail.com");
//logger.warn("this is Test to check Analytics emails Param")
analyticsTest.UpdateAndCheckOutstandingClientsParam("Moran" , "cohen", "lod" , "Beer-Sheva", "tami440000@gmail.com");
logger.warn("this is Test to check Analytics Outstanding Clients Param")







