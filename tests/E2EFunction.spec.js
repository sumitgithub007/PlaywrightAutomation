const { test, expect, request } = require('@playwright/test');


test("Section 6 Test Case with Function_", async({page})=>{

    const orders_Array1 = [];
    const orders_Array2= [];
    const email = "udemycourse3322@gmail.com";
    const product_Name1 = "zara coat 3";
    const product_Name2 = "adidas original"; 
    const product_Name3 = "iphone 13 pro";
    const products = page.locator("[class='card-body'] ")
//  await  page.route("**/*.{jpg,png,jpeg}",route=>route.abort());
  page.on('request',request=>console.log(request.url()));
  page.on('response',response=>console.log(response.url(),response.status()));
    await page.goto("https://rahulshettyacademy.com/client/");
       

    await page.locator("#userEmail").type(email);
    await page.locator("#userPassword").type("Subh@1987#!!");
 
    await page.locator("#login").click();
    
  //  const texts = await page.locator(".card-body>h5").allTextContents();
  // console.log(texts);
   
   
    
   
   
  async function addMultipleProduct(product_Name)
   {
   
    await page.locator("//button[text()=' HOME ']").click();
   await page.waitForSelector("[class='card-body'] ");
    const count_products = await products.count();
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
  }

  async function collectIdsOrderPage(){
    //!Retrieiving the order ids from orders page and collectiong in array
                   
    await page.locator("[routerlink='/dashboard/myorders']").first().click(); //click on orders page
    
    await page.locator("[scope='row']").first().waitFor();
    // page.waitForSelector()
    let orders_total_count=await page.locator("[scope='row']").count();
    
    for(let m=0;m<orders_total_count;++m)
    {
    const id=  await page.locator("[scope='row']").nth(m).textContent();
       orders_Array2.push(id) ;
     
    }
    console.log("Array 2 = "+orders_Array2);  

 }

 
 async function checkout(){
  //!checkout code
  await page.locator("button[routerlink='/dashboard/cart']").click();
  const cart_item_text =await page.locator("div[class='cart']>ul:nth-of-type(1) h3").textContent();
  console.log(cart_item_text);
  await expect( page.locator("div[class='cart']>ul:nth-of-type(1) h3")).toHaveText("zara coat 3");
  await page.locator("//*[text()='Checkout']").click();
 await page.locator("[placeholder='Select Country']").type("in",{delay:100});
   const dropdown =page.locator(".ta-results");
   await dropdown.waitFor();
    
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
 }
    
   function compareData(orders_Array1,orders_Array2){
 //!Compairing both arrays
     let check =(orders_Array1.length === orders_Array2.length) && (orders_Array1.every(val => orders_Array2.includes(val)));
    //!commenting below line so our delete product code can work
     console.log(orders_Array1);
     console.log(orders_Array2);
    expect(check).toBeTruthy();
 //  await page.pause();
   }
     //!Lets Delete existing products 
   
   async   function deleteItems(){
   
    //await sleep(3000);
     await page.locator("//button[text()='Delete']").first().waitFor();
     let alldelButtons =  await page.locator("//button[text()='Delete']").count(); 
     console.log("count is ="+alldelButtons);
    for(let i=0;i<alldelButtons;++i)
    {
     //!Click delete button 
    //await page.pause();
    //await waitFewSec();
       await page.locator("//button[text()='Delete']").nth(0).click();
      
      await  expect(  page.locator("//div[text()=' Orders Deleted Successfully ']")).toHaveText(" Orders Deleted Successfully ");
       //!await waitFewSec(); x implementation
       await sleep(3000);
    }
   }

   async function waitFewSec()
   {
   
   // await page.pause();
    var millisecondsToWait = 10000;
      setTimeout( function() {
        console.log("Iam set timeputttttttttttttt")
    // Whatever you want to do after the wait
   }, millisecondsToWait);
   }


   async function sleep(msec) {
     // await page.pause();
    return new Promise(resolve => setTimeout(resolve, msec));
}


   async function collectIdsThankYouPage(){
    //!Waiting for locators of order id
     await page.waitForSelector("label[class='ng-star-inserted']");
     //!counting the total order id
     let orderId = await page.locator("label[class='ng-star-inserted']").count();
     
      //!Retreiving the order ids from Thank you page and storing in array 
      for(let k=0;k<orderId;++k)
      {
       
       
       let orderId_text =await page.locator("label[class='ng-star-inserted']").nth(k).textContent();
       //console.log(orderId_text.split(" ")[2]);
       orders_Array1.push(orderId_text.split(" ")[2]); 
       
      }
      console.log("Array 1 = "+orders_Array1);
     }
 
  

 await addMultipleProduct(product_Name1);
 await addMultipleProduct(product_Name2);
 await addMultipleProduct(product_Name3);
await checkout();
await collectIdsThankYouPage();
await addMultipleProduct(product_Name1);
await addMultipleProduct(product_Name2);
await addMultipleProduct(product_Name3);
await checkout();
await collectIdsThankYouPage();
await addMultipleProduct(product_Name1);
await addMultipleProduct(product_Name2);
await addMultipleProduct(product_Name3);
await checkout();
await collectIdsThankYouPage();
await collectIdsOrderPage();
//compareData(orders_Array1,orders_Array2);
 await deleteItems();

} )