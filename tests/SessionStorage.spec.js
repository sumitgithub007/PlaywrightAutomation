  const { test, expect } = require('@playwright/test');

let webContext;
test.beforeAll(async({browser})=>{

    const context = await browser.newContext();
      const page =await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client/");
       

     await page.locator("#userEmail").type("chayagoyal2014@gmail.com");
     await page.locator("#userPassword").type("Subh@1987#!!");
 
     await page.locator("#login").click();
     await page.waitForLoadState('networkidle');
   await context.storageState({path:'state.json'});
   webContext = await browser.newContext({storageState:'state.json'});

})


test("Session Storage", async()=>{

     const page =await   webContext.newPage();
  
     await page.goto("https://rahulshettyacademy.com/client/");

     await page.locator("//*[contains(text(),'ORDERS')]").click();
  // await page.pause(); 
  

} )