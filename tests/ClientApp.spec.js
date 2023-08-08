const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

test(" 1 RahulShetty Test Case",async ({page})=>{

    // const context = await browser.newContext();
    // const page = await context.newPage();  //automatic playwright will give
   await page.goto("https://rahulshettyacademy.com/client/");
   console.log(await page.title());
   await page.locator("#userEmail").type("goyalsumitz218@gmail.com");
   await page.locator("#userPassword").type("Subh@1987#!!");

   await page.locator("#login").click();
 //  await page.locator(".card-bopdy>h5").first().waitFor(2000);
await page.waitForLoadState('networkidle');
   const texts = await page.locator(".card-body>h5").allTextContents();
  console.log(texts);
})


// test.skip("RahulShetty Test Case Second",async ({page})=>{

//     // const context = await browser.newContext();
//     // const page = await context.newPage();  //automatic playwright will give
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     console.log(await page.title());
//    await page.locator("#username").type("rahulshettyacademy");
//    await page.locator("[type='password']").type("learning");
   
   
       
//                 //    await page.locator("#signInBtn").click();
//                 //    await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop");
      
//     // await page.waitForSelector(".card-body>h4");
//         await Promise.all([

//             await page.locator("#signInBtn").click(),
//             await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop")


//         ]


//         )
   
   
     
//   // await page.waitForSelector(".card-body>h4",40000);
   
//   //await page.locator(".card-body>h4").last().click();
//    const texts = await page.locator(".card-body>h4").allTextContents();
//  console.log(texts);
// //  await new Promise(()=>{})
// })

// test.skip("UI CONTROLS",async ({page})=>{
 
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     const dropdpwn =   page.locator("select.form-control");
//     const documentLink =  page.locator("a[class='blinkingText']");
//     await dropdpwn.selectOption("consult");
//     await page.locator("span[class='checkmark']").nth(-1).click();
//     const popup_text =await page.locator("div[class='modal-body']>p").innerText();
//     console.log("text is = "+popup_text);
//     await page.locator("#okayBtn").click();
//     await expect(  page.locator("span[class='checkmark']").nth(-1)).toBeChecked();
//     //  page.locator("span[class='checkmark']").last().isChecked();
//     expect(await page.locator("#terms").isChecked()).toBeFalsy();

//     const class_attribute = await page.locator("a[class='blinkingText']").getAttribute("animation");
//     console.log("class attribute is = "+class_attribute);
  
//    const css_property = await page.locator("a[class='blinkingText']").evaluate(element => getComputedStyle(element).color);
//    console.log("css color  attribute is = "+css_property);
  
//    await expect(documentLink).toHaveAttribute("class","blinkingText");

//     await page.pause();
   
       
                
//   })


//   test.skip("Child Windows",async ({browser})=>{

//     const context = await browser.newContext();
//     const page = await context.newPage();   
//    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//    const documentLink =  page.locator("a[class='blinkingText']");
//     const userName =  page.locator("#username");

//    const [...newPage] = await Promise.all([  //using variable argumenysssss

//         context.waitForEvent('page'),
//         documentLink.click(),
//     ])

//     const text =await newPage[0].locator(".red").textContent();
//     console.log(text);
//    const domainName = text.split("@")[1].split(" ")[0]; 
//     console.log(domainName);

//     await userName.type(domainName);
//     const textbox_val =await userName.inputValue();
// console.log("ssssssssssssssssssssssss = "+textbox_val);


//    await page.pause();
// })