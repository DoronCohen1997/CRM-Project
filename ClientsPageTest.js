const BasePage = require("./BasePage");
const ClientsPage = require("./ClientsPage");

class ClientsPageTest {
    constructor() {
        this.testSelenium = new BasePage().selenium
        this.clientsPage = new ClientsPage(this.testSelenium)

    }
    
   //on this Test i want to check that existed customer is deleted & to validate this action.
    async deleteClientTest(input1,input2){
        await this.clientsPage.navigateToClientsPage();
        await this.clientsPage.deleteAndValidateClient(input1,input2);

    }
    //on this Test i want to check that system is stability and works good for long time after i operate 2 functions of press rigth / left.
    async clickRightAndLeftArrowStabilityTest(num){
        for (let i= 0; i < num; i++) {

        await this.clientsPage.navigateToClientsPage()
        await this.clientsPage.clickRightArrow()
        await this.clientsPage.clickRightArrow()
        await this.clientsPage.clickLeftArrow()
        await this.clientsPage.clickLeftArrow()
    }

}

   //on this Test i want to check that existed customer is update & to validate this action.
   async updateClientTest(input,input1){
    await this.clientsPage.navigateToClientsPage();
    await this.clientsPage.updateAndValidateClient(input,input1);

}

//on this Test i want to check the functionality of Close Button & i want to check if he disappear when i press on him.
async closeButtonFunctionalityTest(input){
    await this.clientsPage.navigateToClientsPage();
    await this.clientsPage.closeButtonFunctionality(input);

}


}
    
let clientPageTest = new ClientsPageTest();
//clientPageTest.deleteClientTest("doron", "cohen");// this is Positive Test
//clientPageTest.deleteClientTest("%%%%%%" , "&&&&&&&") // this is Negative Test
//clientPageTest.clickRightAndLeftArrowStabilityTest(10); //this is Positive Test

//clientPageTest.clickRightAndLeftArrowStabilityTest(-1); //this is Negative Test


//clientPageTest.updateClientTest("doron" , "brazil") // this is Positive test.

//clientPageTest.updateClientTest("&&&&" , "%%%%%%%") // this is Negative Test.

clientPageTest.closeButtonFunctionalityTest("doron cohen") // this is Positive Test.

//clientPageTest.closeButtonFunctionalityTest("&&&&&&&&&") // this is Negative Test.

