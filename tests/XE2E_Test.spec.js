const { test, expect } = require('@playwright/test');


test("Section 6 Test Case__", async({page})=>{

    const email = "udemycourse2211@gmail.com";
    const product_Name = "zara coat 3";
    const products = page.locator("[class='card-body'] ");
    await page.goto("https://rahulshettyacademy.com/client/");
       

    await page.locator("#userEmail").type(email);
    await page.locator("#userPassword").type("Subh@1987#!!");
 
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator("[class='card-body']").first().waitFor();
  //! const texts = await page.locator(".card-body>h5").allTextContents();
  // console.log(texts);
   
   const count_products = await products.count();
   console.log(count_products);
   for(let i=0;i<count_products;++i)
   {
      let   text = await products.nth(i).locator("b").textContent();
      console.log(i+" = "+text);
        if(text===product_Name)
        {
            await products.nth(i).locator("button[style='float: right;']").click();
            break;
        }

   }
   const greenbox =await page.locator("div[role='alert']").textContent();
   expect(await page.locator("div[role='alert']").textContent()).toContain("Product Added To Cart");
    console.log(greenbox); 
   
   await page.locator("button[routerlink='/dashboard/cart']").click();
   const cart_item_text =await page.locator("div[class='cart']>ul:nth-of-type(1) h3").textContent();
   console.log(cart_item_text);
   await expect( page.locator("div[class='cart']>ul:nth-of-type(1) h3")).toHaveText("zara coat 3");
   await page.locator("//*[text()='Checkout']").click();
  await page.locator("[placeholder='Select Country']").type("in",{delay:100});
    const dropdown =page.locator(".ta-results");
    await dropdown.first().waitFor();
     
    const optionsCount = await dropdown.locator("span").count();
    console.log("count is = "+optionsCount);
   for(let i=0;i<optionsCount;++i)
   {
      const country =  await dropdown.locator("span").nth(i).textContent();
      console.log("xxxx = "+country);
      if(country.includes("Outlying"))
      {
        await dropdown.locator("span").nth(i).click();
        break;
      }

   }
  await expect( page.locator("label[style='color: lightgray; font-weight: 600;']")).toHaveText(email);
  await page.locator(".action__submit").click();
   await expect( page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   let orderId = await page.locator("label[class='ng-star-inserted']").textContent();
    orderId =orderId.split(" ")[2];
   console.log(orderId);
 //   await page.pause();




} )