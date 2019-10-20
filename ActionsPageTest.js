const BasePage = require("./BasePage");
const ActionsPage = require("./ActionsPage");
const ClientsPage = require("./ClientsPage");


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

            async searchByCountryAndValidate(input,searchBy){
                await this.clientsPage.navigateToClientsPage();
                let clientDetails7 = await this.actionsPage.searchAndValidateClient(input,searchBy);
                console.table(clientDetails7);

            // print table with all detaild of input & searchby :

            
        
            }
        
        

}
    
let actionsPageTest = new ActionsPageTest();
//actionsPageTest.addnewclientandvalidation("doron" , "cohen", "Israel" , "dimona", "tamidoron97@gmail.com");
//actionsPageTest.updateclientownerTest("dafna" , "cohen" , "Hull Conrad", "A"); // this is positive test
//actionsPageTest.updateclientownerTest("$$$$$" , "&&&&" , "@@@@@" , "*****") // this is negative test
//actionsPageTest.updateemailtypeTest("dafna" , "cohen" , "Shepherd Stone", "C"); // this is positive test
//actionsPageTest.updateemailtypeTest("$$$$$" , "@@@@@" , "!!!!!!" , "******") // this is Negative test
//actionsPageTest.updateSoldParameter("dafna" , "cohen" , "Barton Ramirez" , "D") // this is positive test
//actionsPageTest.updateSoldParameter("%%%%%" , "%%%%%%" , "$$$$" , "*******") // this is Negative Test.
actionsPageTest.searchByCountryAndValidate("france" ,"country") // this is positive Test
//actionsPageTest.searchByCountryAndValidate("Liberia" ,"country");//this is Negative Test

