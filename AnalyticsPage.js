const logger = require('./logger');
class AnalyticsPage {
    constructor(selenium) {
        this.selenium = selenium
    }

    async navigateToAnalyticsPage() {
        await this.selenium.getURL("https://lh-crm.herokuapp.com/analytics")

    }

     //this function change color of analytics page and validate this action.
    async changecolorvalidation() {
        await this.selenium.sleepFunction(3000)
        let color = await this.selenium.isElementExists("xpath", "//div[@style='color: rgb(85, 81, 81);']")
        if (color) {
            logger.info("Color Button Exist -- I want To Press & check if Color Change")
            await this.selenium.clickElement("className", "color-btn")
        }
        else {
            logger.warn("there is Problem with recognize the correct Color")
        }

        let newcolor = await this.selenium.isElementExists("xpath", "//div[@style='color: rgba(16, 68, 24, 0.965);']")

        if (newcolor) {
            logger.info("Success: The color has changed")

        }
        else {
            logger.warn("Error: The color has NOT changed")
        }
        await this.selenium.close();
    }


      //private function that getting the email send parameter from analytics page and get the text from that value 
    //the function wait that there will be text at the value And once there is text its return the text
    async getEmailsSentParameter(){
        let time = 0
        let timeToEndLoop=250
        let text = null
        while (time < timeToEndLoop) {
                text = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/div[1]/div[2]/div[1]")
                if (text != 0) 
                    return text   
            time++
        }
        await this.selenium.close()
    }
      //private function that getting the Outstanding Clients parameter from analytics page and get the text from that value 
    //the function wait that there will be text at the value And once there is text its return.
    async getOutstandingClientsParameter(){
        let time = 0
        let timeToEndLoop=250
        let text = null
        while (time < timeToEndLoop) {
                text = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/div[1]/div[3]/div[1]")
                if (text != 0) 
                    return text   
            time++
        }
        await this.selenium.close()
    }

}

module.exports = AnalyticsPage;



