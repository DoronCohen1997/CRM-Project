const logger = require('./logger');
class ClientsPage {
    constructor(selenium) {
        this.selenium = selenium
    }

    async navigateToClientsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/client")
    }

    /*This method gets an input (Email Type) to search and the field to search by
    searchBy can be: Name, Country, Email, Owner, Sold, EmailType
    */
    async searchAndCountClientEmailType(EmailType, searchBy) {
        await this.selenium.sleepFunction(5000)
        await this.selenium.write(EmailType, "xpath", "/html/body/div/div/div[4]/div[1]/input");
        await this.selenium.write(searchBy, "xpath", "/html/body/div/div/div[4]/div[1]/select");
        await this.selenium.sleepFunction(5000)
        let currentPage = 1;
        let shouldPressNext = true;
        let counter = 0;

        while (shouldPressNext) {

            let emailtypecount = await this.selenium.findElementListBy("className", "clientDetails");


            for (let emailtype of emailtypecount) {
                let th = await this.selenium.findElementListBy("tagName", "th", emailtype)
                let noEmailType = await this.selenium.getTextFromElement(null, null, th[7])

                if (noEmailType == EmailType) {
                    counter++
                    logger.info(counter)

                }

            }
            //Switch To Next Page
            let lastPage = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(4)")
            if (currentPage < lastPage) {
                await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(5)");
                currentPage++;
            }
            else {
                shouldPressNext = false;
                await this.selenium.sleepFunction(2000)
            }

        }

        return counter;

    }

    //this function search Client Name (input) & validate that client exist with all Parameters.
    async searchAndValidateClientName(firstName,LastName) {
        await this.selenium.sleepFunction(2000)
        let newinput1 = await firstName.charAt(0).toUpperCase() + firstName.slice(1);
        let newinput2 = await LastName.charAt(0).toUpperCase() + LastName.slice(1);
        let newname = newinput1 + " " + newinput2;
        await this.selenium.write(newname, "xpath", "/html/body/div/div/div[4]/div[1]/input")
        await this.selenium.write("Name", "xpath", "/html/body/div/div/div[4]/div[1]/select")
        await this.selenium.sleepFunction(5000)

        let result1 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[1]");
        let result2 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[2]");

        if ((result1 === newinput1) && (result2 === newinput2)) {
            logger.info("Validation good -- Client Name was found Succssfuly")
        }
        else {
            logger.warn("Validation wrong -- Client Name was Not found Succssfuly")
        }
        await this.selenium.close()
    }

    //this function search Client Name (input) & validate that client exist with all Parameters.
    async searchAndValidateUpdateEmail(firstName, LastName, Owner) {
        await this.selenium.sleepFunction(3000)
        let newinput1 = await firstName.charAt(0).toUpperCase() + firstName.slice(1);
        let newinput2 = await LastName.charAt(0).toUpperCase() + LastName.slice(1);
        let newname = newinput1 + " " + newinput2;
        await this.selenium.write(newname, "xpath", "/html/body/div/div/div[4]/div[1]/input")
        await this.selenium.write("Name", "className", "select-css")
        await this.selenium.sleepFunction(3000)

        let result1 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[1]");
        let result2 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[2]");
        let result3 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[8]");

        if ((result1 === newinput1) && (result2 === newinput2) && (result3 === Owner)) {
            logger.info("Validation good -- Email Type Update Successfuly")
        }
        else {
            logger.warn("Validation wrong -- Email Type not Update Successfuly")
        }
           await this.selenium.close()
    }

     // this Function Validate that Owner Parameter Update Successfuly on Specific Client.
    async searchAndValidateOwner(firstName, LastName, Owner) {
        let newinput1 = await firstName.charAt(0).toUpperCase() + firstName.slice(1);
        let newinput2 = await LastName.charAt(0).toUpperCase() + LastName.slice(1);
        let newname = newinput1 + " " + newinput2;
        await this.selenium.sleepFunction(3000)
        await this.selenium.write(newname, "xpath", "/html/body/div/div/div[4]/div[1]/input")
        await this.selenium.write("Name", "className", "select-css")
        await this.selenium.sleepFunction(3000)
        let result1 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[1]");
        let result2 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[2]");
        let result3 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[5]");


        if ((result1 === newinput1) && (result2 === newinput2) && (result3 === Owner)) {
            logger.info("Validation good -- Update Owner Successfuly")
        }
        else {
            logger.warn("Validation wrong -- Update Owner Fail")
        }


    }
     //this function delete exist client and validate this action.
    async deleteAndValidateClient(firstName, lastName) {
        let newinput1 = await firstName.charAt(0).toUpperCase() + firstName.slice(1);
        let newinput2 = await lastName.charAt(0).toUpperCase() + lastName.slice(1);
        let newname = newinput1 + " " + newinput2;
        await this.selenium.write(newname, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
        await this.selenium.sleepFunction(8000)
        let result = await this.selenium.isElementExists("className" , "clientDetails")
        if(result){
            logger.info("Client Exist -- i Want to Delete")
        }
        else{
            logger.warn("Client not Exist Because of Invalid Input -- Test Fail")
        }
        await this.selenium.clickElement("css", "#root > div > div.clients-component > table > tr.clientDetails")
        await this.selenium.clickElement("css", "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.delete-client-popup-btn")
        await this.selenium.sleepFunction(2000)
        let updateMsg = await this.selenium.findElementBy("css", 'div[class*="pop-up"]')
        let text = await this.selenium.getTextFromElement("css", 'div[class*="pop-up"]')
        if (updateMsg) {
            logger.info("the user deleted successfully -- Test Pass")
        }
        else {
            logger.warn("the user cant deleted -- Test Fail")
        }
        await this.selenium.close()
    }
    //this function upadte Country Parameter on Specific Client that input.
    async updateAndValidateClient(fullName, countryParameter) {
        await this.selenium.write(fullName, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
        await this.selenium.clickElement("css", "#root > div > div.clients-component > table > tr.clientDetails")
        await this.selenium.write(countryParameter, "xpath", "/html/body/div/div/div[4]/div[4]/div/div[1]/div[2]/span[2]/input")
        await this.selenium.clickElement("css", "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.update-client-popup-btn")
        await this.selenium.sleepFunction(2000)
        let updateMsg = await this.selenium.findElementBy("css", 'div[class*="pop-up"]')
        logger.info(await updateMsg.getText())
        if (updateMsg) {
            logger.info("the user update successfully")
        }
        else {
            logger.warn("The User Cant Update")
        }
        await this.selenium.close()
    }
    //this function check if Close Button Exist and verify that this button disappear when i press on him
    async closeButtonFunctionality(firstName, lastName) {
        let newinput1 = await firstName.charAt(0).toUpperCase() + firstName.slice(1);
        let newinput2 = await lastName.charAt(0).toUpperCase() + lastName.slice(1);
        let newname = newinput1 + " " + newinput2;
        await this.selenium.write(newname, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
        await this.selenium.clickElement("css", "#root > div > div.clients-component > table > tr.clientDetails")
        let closebtn = await this.selenium.isElementExists("css", "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.cancel-client-popup-btn")
        if (closebtn) {
            logger.info("Close Button Exist and i want to check if he disappear when i press on him")
            await this.selenium.clickElement("css", "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.cancel-client-popup-btn")
            let window = await this.selenium.isElementExists("xpath", "/html/body/div/div/div[4]/div[4]/div")
            if (window) {
                logger.info("Close Button Exist -- Test Fail")
            }
            else {
                logger.warn("Close Button Not Exist -- Test Pass");
            }

        }
        else {
            logger.warn("Close Button Not Exist because of Invalid input -- Test Fail");
        }
        await this.selenium.close()
    }


    //this Function clicks on Right Arrow button
    async clickRightArrow() {
        await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
        await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(5)")
        let text = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
        logger.info(text)
    }
     //this Function clicks on Left Arrow button
    async clickLeftArrow() {
        await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
        await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(1)")
        let text = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
        logger.info(text)
    }
    //this function validate that after Press on Right arrow button you are in correct page
    async validateRightClickFunction(){
        let number = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
        if (number == 3){
            logger.info("Action success -- this is correct Page")
        }
        else{
            logger.warn("Action fail -- this is not correct page")
        }
    }
     //this function validate that after Press on Left arrow button you are in correct page
    async validateLeftClickFunction(){
        let number = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
        if (number == 1){
            logger.info("Action success -- this is correct Page")
        }
        else{
            logger.warn("Action fail -- this is not correct page")
        }
    }

      // this Function Validate that Sold Parameter Update Successfuly on Specific Client.
    async searchAndValidatesold(firstName, LastName) {
        let newinput1 = await firstName.charAt(0).toUpperCase() + firstName.slice(1);
        let newinput2 = await LastName.charAt(0).toUpperCase() + LastName.slice(1);
        let newname = newinput1 + " " + newinput2;
        await this.selenium.write(newname, "xpath", "/html/body/div/div/div[4]/div[1]/input")
        await this.selenium.write("Name", "className", "select-css")
        await this.selenium.sleepFunction(5000)

        let result1 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[1]");
        let result2 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[2]");
        let result3 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/table/tr[2]/th[6]");

        if ((result1 === newinput1) && (result2 === newinput2) && (result3 === "YES")) {
            logger.info("Validation good -- Sold Parameter Update Successfuly")
        }
        else {
            logger.warn("Validation wrong -- Sold Parameter not Update Successfuly")
        }
        await this.selenium.close()
    }

    //this function search by: (value:no & search by parameter:sold) & Count all this Clients.
    async searchAndCountSold(value, searchBy) {
        await this.selenium.sleepFunction(3000)
        await this.selenium.write(value, "xpath", "/html/body/div/div/div[4]/div[1]/input");
        await this.selenium.write(searchBy, "xpath", "/html/body/div/div/div[4]/div[1]/select");
        await this.selenium.sleepFunction(5000)

        let currentPage = 1;
        let shouldPressNext = true;
        let counter = 0;

        while (shouldPressNext) {

            let soldcount = await this.selenium.findElementListBy("className", "clientDetails");

            for (let sold of soldcount) {
                let th = await this.selenium.findElementListBy("tagName", "th", sold)
                let noSold = await this.selenium.getTextFromElement(null, null, th[5])

                if (noSold == "NO") {
                    counter++
                    logger.info(counter)
                }
            }
            //Switch To Next Page
            let lastPage = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(4)")
            if (currentPage < lastPage) {
                await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(5)");
                currentPage++;
            }
            else {
                shouldPressNext = false;
            }

        }

        return counter;

    }


}

module.exports = ClientsPage;


