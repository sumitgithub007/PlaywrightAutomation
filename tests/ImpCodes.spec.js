const { test, expect } = require('@playwright/test');
const { use, timeout } = require('../playwright.config');


test("@Web Check Element present Issues This will clear everything", async({page})=>{

   // const email = "goyalsumit319@gmail.com";
    const product_Name = "zara coat 3";
    const products = page.locator("[class='card-body'] ");
    await page.goto("https://rahulshettyacademy.com/client/");

  //  await page.locator("//img[@class='dsfdf']").waitFor({timeout:7000}); //correct way 
  //await page.locator("[scope='row']").first().waitFor();
  //await page.locator("//img[@class='dsfdf']").click();
  //Below will fail immediately
   //page.waitForSelector("//img[@class='dsfdf']");

    // https://stackoverflow.com/questions/64784781/how-to-check-if-an-element-exists-on-the-page-in-playwright-js 
    // https://stackoverflow.com/questions/70179441/check-if-element-is-visible-in-playwright

 //Below is depreciated not to use
 // const logg=await page.locator("a[routerklink='/auth/register']").isVisible({ timeout: 15000 });
   
  
    // try {  //Ha mai wait karuga 20 seconds
    //     await page.waitForSelector("a[routerklink='/auth/register']", { timeout: 20000 })
    //    console.log("Yes Iam hereeeeeeeeeeeeeeee")
  
    //   } catch (error) {`enter code here`
    //     console.log(error +"The element didn't appear.")
    //   }

    await expect(register.isSubscribeChecked()).toBeChecked();  //ye wait karega till amount of expect sai ha

      //await expect(page.locator("//div[@aria-label='Orders Deleted Successfully']")).toHaveCount(0);
  // await expect(page.locator("a[routerlink='/auth/register']")).toHaveCount(0);


    //   Note : isVisible() depreciated not to use
    //   bec It never waits till a specified timeout
    //   https://playwright.dev/docs/api/class-locator#locator-is-visible

} )
