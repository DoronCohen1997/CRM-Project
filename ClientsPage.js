class ClientsPage {
        constructor(selenium) {
            this.selenium = selenium
        }
    
        async navigateToClientsPage() {
                await this.selenium.getURL("https://lh-crm.herokuapp.com/client")
        }
        
            /*This method gets an input to search and the field to search by
            searchBy can be: Name, Country, Email, Owner, Sold, EmailType
            Return value: true if client exist, false otherwise
            */
            async searchAndcountClientEmailTypeA(input1,input2,input3,input4,searchBy){

            await this.selenium.write(input1, "xpath", "/html/body/div/div/div[4]/div[1]/input");
            await this.selenium.write(searchBy, "xpath" , "/html/body/div/div/div[4]/div[1]/select");

            let currentPage = 1;
            let shouldPressNext = true;
            let counterA = 0;
            
            while (shouldPressNext) {

                let emailtypecount = await this.selenium.findElementListBy("className" , "clientDetails");
                

                for (let emailtype of emailtypecount) {
                    let th = await this.selenium.findElementListBy("tagName","th",emailtype)
                    let noEmailType = await this.selenium.getTextFromElement(null,null,th[7])

                    if (noEmailType == "A") {
                        counterA++
                        console.log(counterA)

                    }
        
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

           return counterA;
                
            }

        async searchAndcountClientEmailTypeB(input1,input2,input3,input4,searchBy){

            await this.selenium.write(input2, "xpath", "/html/body/div/div/div[4]/div[1]/input");
            await this.selenium.write(searchBy, "xpath" , "/html/body/div/div/div[4]/div[1]/select");

            let currentPage = 1;
            let shouldPressNext = true;
            let counterB = 0;
            
            while (shouldPressNext) {

                let emailtypecount = await this.selenium.findElementListBy("className" , "clientDetails");
                

                for (let emailtype of emailtypecount) {
                    let th = await this.selenium.findElementListBy("tagName","th",emailtype)
                    let noEmailType = await this.selenium.getTextFromElement(null,null,th[7])

                    if (noEmailType == "B") {
                        counterB++
                        console.log(counterB)

                    }
        
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

           return counterB;
                
            }

        async searchAndcountClientEmailTypeC(input1,input2,input3,input4,searchBy){

            await this.selenium.write(input3, "xpath", "/html/body/div/div/div[4]/div[1]/input");
            await this.selenium.write(searchBy, "xpath" , "/html/body/div/div/div[4]/div[1]/select");

            let currentPage = 1;
            let shouldPressNext = true;
            let counterC = 0;
            
            while (shouldPressNext) {

                let emailtypecount = await this.selenium.findElementListBy("className" , "clientDetails");
                

                for (let emailtype of emailtypecount) {
                    let th = await this.selenium.findElementListBy("tagName","th",emailtype)
                    let noEmailType = await this.selenium.getTextFromElement(null,null,th[7])

                    if (noEmailType == "C") {
                        counterC++
                        console.log(counterC)

                    }
        
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

           return counterC;
                
            }

        async searchAndcountClientEmailTypeD(input1,input2,input3,input4,searchBy){

            await this.selenium.write(input4, "xpath", "/html/body/div/div/div[4]/div[1]/input");
            await this.selenium.write(searchBy, "xpath" , "/html/body/div/div/div[4]/div[1]/select");

            let currentPage = 1;
            let shouldPressNext = true;
            let counterD = 0;
            
            while (shouldPressNext) {

                let emailtypecount = await this.selenium.findElementListBy("className" , "clientDetails");
                

                for (let emailtype of emailtypecount) {
                    let th = await this.selenium.findElementListBy("tagName","th",emailtype)
                    let noEmailType = await this.selenium.getTextFromElement(null,null,th[7])

                    if (noEmailType == "D") {
                        counterD++
                        console.log(counterD)

                    }
        
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

           return counterD;
                
            }

        async searchAndValidateClientname(input1,input2){

            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;
            await this.selenium.write(newname , "xpath" , "/html/body/div/div/div[4]/div[1]/input")
            await this.selenium.write("Name" , "xpath" , "/html/body/div/div/div[4]/div[1]/select")
            setTimeout(()=>{
                console.log("count to 5")
                this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
            }, 5000)
          let result1 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[1]");
          let result2 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[2]");


          if ((result1 === newinput1) && (result2 === newinput2)) {
            console.log("Validation good")
            }
            else{
            console.log("Validation wrong")
            }

        }

        async searchAndValidateUpdateemail(input1,input2,input3,input4){

            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;

            await this.selenium.write(newname , "xpath" , "/html/body/div/div/div[4]/div[1]/input")
            await this.selenium.write("Name" , "className" , "select-css")

            let result1 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[1]");
            let result2 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[2]");
            let result3 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[5]");
            let result4 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[8]");
       
            
        if ((result1 === newinput1) && (result2 === newinput2) && (result4 === input4)) {
            console.log("Validation good")
        }
         else{
             console.log("Validation wrong")
         }


        }

        async searchAndValidateowner(input1,input2,input3,input4){
            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;

            await this.selenium.write(newname , "xpath" , "/html/body/div/div/div[4]/div[1]/input")
            await this.selenium.write("Name" , "className" , "select-css")

            let result1 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[1]");
            let result2 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[2]");
            let result3 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[5]");
            let result4 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[8]");
       
            
        if ((result1 === newinput1) && (result2 === newinput2) && (result3 === input3)) {
            console.log("Validation good")
        }
         else{
             console.log("Validation wrong")
         }


        }

        async deleteAndValidateClient(input1,input2){
            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;
            await this.selenium.write(newname, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
            await this.selenium.clickElement("css", "#root > div > div.clients-component > table > tr.clientDetails")
            await this.selenium.clickElement("css", "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.delete-client-popup-btn")
            let updateMsg = await this.selenium.findElementBy("css", 'div[class*="pop-up"]')
            if(updateMsg){
                console.log("the user deleted successfully")
            }
            else{
                console.log("the user cant deleted")
            }
           console.log(await updateMsg.getText())
            setTimeout(()=>{
                console.log("count to 5")
                this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
            }, 5000)
            
        }

        async updateAndValidateClient(input,input1){
            await this.selenium.write(input, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
            await this.selenium.clickElement("css", "#root > div > div.clients-component > table > tr.clientDetails")
            await this.selenium.write(input1, "xpath" , "/html/body/div/div/div[4]/div[4]/div/div[1]/div[2]/span[2]/input")
            await this.selenium.clickElement("css", "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.update-client-popup-btn")
            let updateMsg = await this.selenium.findElementBy("css", 'div[class*="pop-up"]')
            if(updateMsg){
                console.log("the user update successfully")
            }
            else{
                console.log("The User Cant Update")
            }
           console.log(await updateMsg.getText())
            setTimeout(()=>{
                console.log("count to 5")
                this.selenium.isElementExists("css", '#root > div > div.clients-component > table > tr:nth-child(2)')
            }, 5000)
            
        }

        async closeButtonFunctionality(input){
            await this.selenium.write(input, "xpath", '//*[@id="root"]/div/div[4]/div[1]/input')
            await this.selenium.clickElement("css", "#root > div > div.clients-component > table > tr.clientDetails")
            let closebtn = await this.selenium.isElementExists("css" , "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.cancel-client-popup-btn")
            if (closebtn) {
                console.log("Close Button Exist and i want to check if he disappear when i press on him")
                
            }
            else{
                console.log("Close Button Not Exist");
            }
            await this.selenium.clickElement("css" , "#root > div > div.clients-component > div.details-pop-up-container > div > div.update-pop-up-btn > input.cancel-client-popup-btn")
  
        }



        async clickRightArrow(){
            await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
            await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(5)")
           let text = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
           console.log(text)
        }

        async clickLeftArrow(){
            await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
            await this.selenium.clickElement("css", "#root > div > div.clients-component > div.page-numbers > img:nth-child(1)")
           let text = await this.selenium.getTextFromElement("css", "#root > div > div.clients-component > div.page-numbers > span:nth-child(2)")
           console.log(text)
        }
        
        
        async searchAndValidatesold(input1,input2){
            let newinput1 = await input1.charAt(0).toUpperCase() + input1.slice(1);
            let newinput2 = await input2.charAt(0).toUpperCase() + input2.slice(1);
            let newname = newinput1 + " " + newinput2;

            await this.selenium.write(newname , "xpath" , "/html/body/div/div/div[4]/div[1]/input")
            await this.selenium.write("Name" , "className" , "select-css")

            let result1 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[1]");
            let result2 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[2]");
            let result3 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[6]");
            //let result4 = await this.selenium.getTextFromElement("xpath" , "/html/body/div/div/div[4]/table/tr[2]/th[8]");
       
            
        if ((result1 === newinput1) && (result2 === newinput2) && (result3 === "YES")) {
            console.log("Validation good")
        }
         else{
             console.log("Validation wrong")
         }


        }

            async searchAndcountsold(input1, searchBy){
            await this.selenium.write(input1, "xpath", "/html/body/div/div/div[4]/div[1]/input");
            await this.selenium.write(searchBy, "xpath" , "/html/body/div/div/div[4]/div[1]/select");
           
            let currentPage = 1;
            let shouldPressNext = true;
            let counter = 0;
            
            while (shouldPressNext) {

                let soldcount = await this.selenium.findElementListBy("className" , "clientDetails");
                

                for (let sold of soldcount) {
                    let th = await this.selenium.findElementListBy("tagName","th",sold)
                    let noSold = await this.selenium.getTextFromElement(null,null,th[5])

                    if (noSold == "NO") {
                        counter++
                        console.log(counter)

                        
                    }
            

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

           return counter;
                
            }


        }

        module.exports = ClientsPage;

        
    