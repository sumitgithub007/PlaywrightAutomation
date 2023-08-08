const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

test("RahulShetty Test Case section 7",async ({page})=>{

     
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    
   
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    
    page.on('dialog',async (dialog)=>{
      
    await dialog.accept();
     console.log("message is = "+dialog.message()); 
   
   });
   //await page.pause();
  await page.locator("#alertbtn").click();
  //await page.waitForTimeout(4000);
  try{
  await page.waitForEvent('dialog',{timeout:3000});
  }
  catch(error){
    console.log("xx"+error);
  }
   // await page.pause();
//     await page.locator("#confirmbtn").click();
//   await page.waitForTimeout(4000);

//   await page.locator("#mousehover").hover();
// await page.pause();
  
})