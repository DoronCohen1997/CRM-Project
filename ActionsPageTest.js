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
    async addnewclientandvalidation(input1,input2,input3,input4,input5){
        await this.actionsPage.navigateToActionsPage();
        await this.actionsPage.addnewclientTest(input1,input2,input3,input4,input5);
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.searchAndValidateClientname(input1,input2);

    }

        //on this Test i want to check that existed client was update with new owner & to validate this action.
    async updateclientownerTest(input1,input2,input3,input4){
        await this.actionsPage.navigateToActionsPage();
        await this.actionsPage.updateclientowner(input1,input2,input3);
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.searchAndValidateowner(input1,input2,input3,input4)

        
    }

        //on this Test i want to check that existed client was update with new emailtype & to validate this action.
    async updateemailtypeTest(input1,input2,input3,input4){
        await this.actionsPage.navigateToActionsPage();
        await this.actionsPage.updateClientemailtype(input1,input2,input3,input4);
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.searchAndValidateUpdateemail(input1,input2,input3,input4);

        
    }

            //on this Test i want to check that existed client was update with sold parameter & to validate this action.
            async updateSoldParameter(input1,input2){
                await this.actionsPage.navigateToActionsPage();
                await this.actionsPage.updateclientsold(input1,input2);
                await this.clientsPage.navigateToClientsPage();
                await this.clientsPage.searchAndValidatesold(input1,input2);
        
            }
            //on this Test i want to check the result after insert specific input & searchby specific Criteria.
            async searchByCountryAndValidate(input,searchBy){
                await this.clientsPage.navigateToClientsPage();
                let clientDetails7 = await this.actionsPage.searchAndValidateClient(input,searchBy);
                console.table(clientDetails7);
                if (clientDetails7.length == 0) {
                    logger.info("there is No result By Criteria")
                }
                else{
                    logger.info("there is result By Criteria")
                }


            
        
            }
        
        

}
    
let actionsPageTest = new ActionsPageTest();
//actionsPageTest.addnewclientandvalidation("Yoram" , "Levi", "soria" , "Yaffo", "tamidoron97@gmail.com");// this is positive test
//logger.warn("this is add new Client Test");
//actionsPageTest.updateclientownerTest("dafna" , "cohen" , "Hull Conrad", "A"); // this is positive test
//logger.warn("this is Update Owner Test")
//actionsPageTest.updateclientownerTest("$$$$$" , "&&&&" , "@@@@@" , "*****") // this is negative test
//actionsPageTest.updateemailtypeTest("dafna" , "cohen" , "Shepherd Stone", "C"); // this is positive test
//logger.warn("this is Update EMail Type Test")
//actionsPageTest.updateemailtypeTest("$$$$$" , "@@@@@" , "!!!!!!" , "******") // this is Negative test
//actionsPageTest.updateSoldParameter("dafna" , "cohen" , "Barton Ramirez" , "D") // this is positive test
//logger.warn("This is Update Sold Parameter Test")
//actionsPageTest.updateSoldParameter("%%%%%" , "%%%%%%" , "$$$$" , "*******") // this is Negative Test.
actionsPageTest.searchByCountryAndValidate("france" ,"country") // this is positive Test
logger.warn("this is search and Validate test by Criteria")
//actionsPageTest.searchByCountryAndValidate("Liberia" ,"country");//this is Negative Test

