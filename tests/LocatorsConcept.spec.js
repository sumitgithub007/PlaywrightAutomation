const { test, expect } = require('@playwright/test');

//test.describe.configure({mode:'parallel'});

// test("Locators  Login",async ({page})=>{


// await page.goto("https://www.demoblaze.com/");
//  await page.click("#login2");
//  await page.fill("#loginusername","sumit");
//  await page.fill("#loginpassword","sumit123");
//  await page.click("(//*[text()='Log in'])[2]");
//  const textVal =await page.locator("//a[@style='display: block;' and @id='nameofuser']").textContent();
// console.log("text values is = "+textVal);
 
// //await page.waitForTimeout(300000);
// //await new Promise(() => {})

// //await page.close();


// })

test("@Web Locators  Signup",async ({page})=>{

  
  page.on('dialog',async dialog=> {
    
    console.log("xxxxxxxxxxxx= "+dialog.message());
    await dialog.accept();
    
     } ); 

     await page.goto("https://www.demoblaze.com/");
     await page.click("#signin2");
     const username = page.locator("#sign-username");
  // / await  username.click();
   await username.fill("sumixxwwwwwwwxxxxxxxxxx9090");
     const password = page.locator("#sign-password");
   await password.fill("sumit1234");
    await page.click("(//*[text()='Sign up'])[2]");
    await page.waitForEvent("dialog");
    // await page.pause();
    
    //await alert.
     
  // await page.waitForTimeout(300000);
   // await new Promise(() => {})
    
  //  await page.close();
    
    
    })