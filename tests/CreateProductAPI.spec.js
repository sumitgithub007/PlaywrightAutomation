const { test, expect, request } = require('@playwright/test');
const { timeout } = require('../playwright.config');
const {APIUtils} = require("../utils/APIUtils");
let orders_Array2 = [];
const payload ={
    userEmail: "goyalsumit319@gmail.com",
    userPassword: "Subh@1987#!!"
};

const orderPayload={
    "orders": [
      {
        country: "Congo, tjhgfhjikohe Democratic Republic of the",
        productOrderedId: "6262e9d9e26b7e1a10e89c04"
      }
    ]
  };
let response;

test.beforeAll(async ()=>{

const apiContext= await request.newContext();
  const apiutl = new APIUtils(apiContext,payload);//payload login wala
  response= await apiutl.createOrder(orderPayload);


})


           

test("API Order Place",async ({page})=>{

 


    page.addInitScript((value)=>{

        window.localStorage.setItem('token',value);

     },response.token);
  
    
     await page.goto("https://rahulshettyacademy.com/client/");


    async function collectIdsOrderPage(){
        //!Retrieiving the order ids from orders page and collectiong in array
                       
      //  https://rahulshettyacademy.com/client
       
        await page.locator("[routerlink='/dashboard/myorders']").first().click(); //click on orders page
     
        await page.locator("[scope='row']").first().waitFor({timeout:3000});
        let orders_total_count=await page.locator("[scope='row']").count();
        
        for(let m=0;m<orders_total_count;++m)
        {
        const id=  await page.locator("[scope='row']").nth(m).textContent();
           orders_Array2.push(id) ;
         
        }
        console.log("Array 2 = "+orders_Array2);  
    
     }

     await collectIdsOrderPage();







 }
)