const logger = require('./logger');
class AnalyticsPage {
        constructor(selenium) {
            this.selenium = selenium
        }
    
        async navigateToAnalyticsPage() {
                await this.selenium.getURL("https://lh-crm.herokuapp.com/analytics")

        }
        
            /*This method gets an input to search and the field to search by
            searchBy can be: Name, Country, Email, Owner, Sold, EmailType
            Return value: true if client exist, false otherwise
            */
            searchAndValidateAnalytics(input, searchBy){
            
                //implement the searchAndValidateClient function
            }


        async changecolorvalidation(){
            let color = await this.selenium.isElementExists("xpath", "//div[@style='color: rgb(85, 81, 81);']")
            if (color) {
                await this.selenium.clickElement("className" , "color-btn")  
            }
            else{
                logger.warn("there is Problem with recognize the correct Color")
            }
    
            let newcolor = await this.selenium.isElementExists("xpath", "//div[@style='color: rgba(16, 68, 24, 0.965);']")
    
            if (newcolor) {
                logger.info("this is correct color - green")
                
            }
            else{
                logger.warn("there is Problem with recognize the correct Color - green")
            }


        }

        async emailCounter(){
            await this.selenium.clickElement("xpath" , "/html/body/div/div/div[2]/a[2]/input")
            let mailcount = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/div[1]/div[2]/div[1]")
            let mailcount1 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/div[1]/div[2]/div[1]")
            let mailcount2 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/div[1]/div[2]/div[1]")
           return mailcount2;
        }
    
        async checkOutstandingClientsParam(){
            await this.selenium.clickElement("xpath" , "/html/body/div/div/div[2]/a[2]/input")
            let OutstandingParam = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/div[1]/div[3]/div[1]")
            let OutstandingParam1 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/div[1]/div[3]/div[1]")
            let OutstandingParam2 = await this.selenium.getTextFromElement("xpath", "/html/body/div/div/div[4]/div[1]/div[3]/div[1]")

            return (OutstandingParam2)
        } 

    }

        module.exports = AnalyticsPage;

        

