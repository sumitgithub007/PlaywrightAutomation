const { test, expect, request } = require('@playwright/test');
const { timeout } = require('../playwright.config');
const {APIUtils} = require("../utils/APIUtils");

let orders_Array2 = [];
const payload ={
    userEmail: "rubyg2386@gmail.com",
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


           

test("API Intercepting Network By playwright",async ({page,request})=>{

  

const fakeResponse =  {data:[],message:"No Orders"}

    page.addInitScript((value)=>{

        window.localStorage.setItem('token',value);

     },response.token);
//     await page.pause();
     await page.goto("https://rahulshettyacademy.com/client/");

      //  await page.pause();
     await  page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6367a7f784742396f34a371e",
    async(route)=>{



       
       const response2 = await page.request.fetch(route.request());
     
       //console.log(await response2.json());
       let body =  JSON.stringify(fakeResponse);
      
    
       await route.fulfill({
                   response2,
                   body
           })
             
    
        
    })

    
    
    
   // await page.locator("button[routerlink='/dashboard/myorders']").click();
   // await page.pause();



 }
)