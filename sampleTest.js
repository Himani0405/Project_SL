const {Builder, By, Key, until ,ChromeOptions, WebElement} = require('selenium-webdriver');

(async function example(){

    // Launch the chrome browserr
         const chrome=require("selenium-webdriver/chrome");
          const  options=new chrome.Options();
          options.addArguments("--disable-notifications");

          const driver=new Builder().forBrowser("chrome").setChromeOptions(options).build();

    // Launch the url
    await driver.get("https://unergia-saas-staging-solarladder.vercel.app/login");

    await driver.manage().setTimeouts({implicit:10000});

    // Enter email
    await driver.findElement(By.xpath("//input[@name='email']")).sendKeys("solarladdertest787@yopmail.com", Key.RETURN);
    //Enter password
    await driver.findElement(By.xpath("//input[@name='password']")).sendKeys("password",Key.RETURN);
    // Click on Sign-In
    await driver.findElement(By.xpath("//button[@type='submit']")).click();


    // Click on add project tab
       await driver.findElement(By.xpath("//button[@style='text-transform: none;']")).click();
       await driver.sleep(4000);


    // Clear the project size field and enter the size 
       const  projectsize =await driver.findElement(By.xpath("//input[@name='projectSize']"));
            projectsize.clear();
            projectsize.sendKeys("5",Key.RETURN);

      // Enter the customer name
      await driver.findElement(By.xpath("//input[@name='customerName']")).sendKeys("kenny",Key.RETURN);
      await driver.sleep(5000);
      // Enter the customer phone
      await driver.findElement(By.xpath("//input[@type='tel']")).sendKeys("99999-9999",Key.RETURN);
      await driver.sleep(5000);
      // Enter the project location
      await driver.findElement(By.xpath("//input[@name='location']")).sendKeys("Jharkhand",Key.RETURN);
      await driver.sleep(5000);
      // Click on the add project btn
      await driver.findElement(By.xpath("//button[@type='submit']")).click();

      


    //Drag the project from equity to site-visit

      // Wait for the page to load 
      driver.wait(until.elementLocated(By.xpath("//div[@lane='romFQMsvOO3xFnUzL1q1-lane1']/div/div[1]")), 10000);
      
       const enquiryProject =await driver.findElement(By.xpath("//div[@lane='romFQMsvOO3xFnUzL1q1-lane1']/div/div[1]"));
       const siteVisitArea =await driver.findElement(By.xpath("//div[@lane='romFQMsvOO3xFnUzL1q1-lane60']"));
       driver.actions().dragAndDrop(enquiryProject, siteVisitArea).perform();

      await driver.quit();
      

		       
		   

})();