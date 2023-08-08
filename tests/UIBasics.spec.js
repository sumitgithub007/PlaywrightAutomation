const { test, expect } = require('@playwright/test');

test("RahulShetty Test Case visual testing",async ({page})=>{
 
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   await page.locator("#username").type("rahulshetty");
   await page.locator("[type='password']").type("learning");
   await page.locator("#signInBtn").click();
   const errmsg =await page.locator("[style*='block']").textContent();
   console.log("Error msg is = "+errmsg);
   await expect(page.locator("[style*='block']")).toContainText("Incorrect");
   
})


 