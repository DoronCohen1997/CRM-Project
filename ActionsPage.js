class ActionsPage {
        constructor(selenium) {
            this.selenium = selenium
        }
    
        async navigateToActionsPage() {
                await this.selenium.getURL("https://lh-crm.herokuapp.com/actions")
        }
        
            /*This method gets an input to search and the field to search by
            searchBy can be: Name, Country, Email, Owner, Sold, EmailType
            Return value: true if client exist, false otherwise
            */
            async searchAndValidateClient(input, searchBy){
            
            await this.selenium.write(input, "xpath", "/html/body/div/div/div[4]/div[1]/input");
            await this.selenium.write(searchBy, "xpath" , "/html/body/div/div/div[4]/div[1]/select");

            let currentPage = 1;
            let shouldPressNext = true;
            let arrayOfValues = []
            
            while (shouldPressNext) {

                let clientDetails = await this.selenium.findElementListBy("className" , "clientDetails");
                

                for (let details of clientDetails) {
                    let th = await this.selenium.findElementListBy("tagName","th",details)
                    let firstname = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(1)");
                    if (firstname){
                        firstname = await this.selenium.getTextFromElement(null,null,th[0])
                        
  
                    }

                    let lastname = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(2)");
                    if (lastname){
                        lastname = await this.selenium.getTextFromElement(null,null,th[1])
                        
                    }

                    let country = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(3)");
                    if (country){
                        country = await this.selenium.getTextFromElement(null,null,th[2])
                        
                    }

                    let Email = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(4)");
                    if (Email){
                        Email = await this.selenium.getTextFromElement(null,null,th[3])
                        
                    }

                    let Owner = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(5)");
                    if (Owner){
                        Owner = await this.selenium.getTextFromElement(null,null,th[4])
                        
                    }

                    let Sold = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(6)");
                    if (Sold){
                        Sold = await this.selenium.getTextFromElement(null,null,th[5])
                        
                    }

                    let ContactDate = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(7) > time");
                    if (ContactDate){
                        ContactDate = await this.selenium.getTextFromElement(null,null,th[6])
                        
                    }

                    let EmailType = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > table > tr:nth-child(2) > th:nth-child(8)");
                    if (EmailType){
                        EmailType = await this.selenium.getTextFromElement(null,null,th[7])
                        
                    }

                    const ClientObj = {
                        firstname,
                        lastname,
                        country,
                        Email,
                        Owner,
                        Sold,
                        ContactDate,
                        EmailType
                    }
                    arrayOfValues.push(ClientObj)

                   
                }

                            //Switch To Next Page
            let lastPage = await this.selenium.getTextFromElement("css" , "#root > div > div.clients-component > div.page-numbers > span:nth-child(4)")
            if (currentPage < lastPage) {
                await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(5)");
                currentPage++;
            } 
            else {
                shouldPressNext = false;
            }

            }


           return arrayOfValues;
                
            }


        async addnewclientTest(input1,input2,input3,input4,input5){
            await this.selenium.write(input1, "id" , "firstName");
            await this.selenium.write(input2, "id" , "lastName");
            await this.selenium.write(input3, "id" , "country");
            await this.selenium.write(input4, "xpath" , "/html/body/div/div/div[4]/div[2]/div[2]/table/tr[4]/th[2]/input");
            await this.selenium.write(input5, "id" , "email");
            await this.selenium.clickElement("className" , "add-client-btn");
            
        }

        async updateclientowner(input1,input2,input3){

            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;
            await this.selenium.write(newname, "xpath" , "/html/body/div/div/div[4]/div[1]/table/div/input");
            await this.selenium.write(input3, "css" , "#root > div > div.actions-container > div.update-container > table > table > tr.change-owner > th:nth-child(2) > input");
            await this.selenium.clickElement("xpath" , "/html/body/div/div/div[4]/div[1]/table/table/tr[1]/th[3]/input");
            let updateMsg = await this.selenium.findElementBy("css", 'div[class*="pop-up"]')
            if(updateMsg){
                console.log("the user update successfully")
            }
           console.log(await updateMsg.getText())
            setTimeout(()=>{
                console.log("count to 5")
                this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
            }, 5000)

        }

        async updateClientemailtype(input1,input2,input3,input4){

            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;
            await this.selenium.write(newname, "xpath" , "/html/body/div/div/div[4]/div[1]/table/div/input");
            await this.selenium.write(input4, "css" , "#change-email-type > th:nth-child(2) > input");
            await this.selenium.clickElement("xpath" , "/html/body/div/div/div[4]/div[1]/table/table/tr[2]/th[3]/input");
            let updateMsg = await this.selenium.findElementBy("css", 'div[class*="pop-up"]')
            if(updateMsg){
                console.log("the user update successfully")
            }
           console.log(await updateMsg.getText())
            setTimeout(()=>{
                console.log("count to 5")
                this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
            }, 5000)

        }

        async updateclientsold(input1,input2){

            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;
            await this.selenium.write(newname, "xpath" , "/html/body/div/div/div[4]/div[1]/table/div/input");
            await this.selenium.clickElement("xpath" , "/html/body/div/div/div[4]/div[1]/table/table/tr[3]/th[2]/input");
            let updateMsg = await this.selenium.findElementBy("css", 'div[class*="pop-up"]')
            if(updateMsg){
                console.log("the user update successfully")
            }
           console.log(await updateMsg.getText())
            setTimeout(()=>{
                console.log("count to 5")
                this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
            }, 5000)

        }

        }

        module.exports = ActionsPage;