const { test, expect } = require('@playwright/test');
import { allure } from "allure-playwright";
const {LoginPage} =require('../pageObjects/LoginPage');
const {DashboardPage} =require('../pageObjects/DashboardPage');
const {POManager} =require('../pageObjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require('../utils/PageObject_TestData.json')));
const {customTest} = require('../utils/test-base');


for(const data of dataSet ){

test.only(`@PageObject Page Object Client App Login ${data.product_Name}`, async({page},testIn)=>{

   allure.epic("Test case Multiple Times")
   allure.story("Iam trying to purchase a new product from Amazon")
    const  pageobjectsmanager = new POManager(page);
   // const email = "goyalsumit319@gmail.com";
    //const thankyoumsg  = " Thankyou for the order. ";
    //const pass = "Subh@1987#!!";
    //const product_Name = "iphone 13 pro";
    const products = page.locator("[class='card-body']");
    const loginPage =await pageobjectsmanager.getLoginPageObject();
     const country_initials = "in";
     const actual_country ="Outlying"
    
     await loginPage.goTo();
     allure.label("Navigating to url","www.google.com");
     allure.link("https://playwright.dev", "playwright-site"); // link with name
     allure.issue("Issue Name", "https://github.com/allure-framework/allure-js/issues/352");
     
     await loginPage.validLogin(data.email,data.pass);

    const dashboardPageObject = await pageobjectsmanager.getDashBoardPageObject(); //return DashBoardPageObject
    await dashboardPageObject.searchProduct_And_Add(data.product_Name); 
    await dashboardPageObject.navigateToCart();
      
    const cartPageObject = await pageobjectsmanager.getCartPageObject();
   await cartPageObject.checkItemDataCorrectOnCartpage(data.product_Name); //assertion performed
    await cartPageObject.clickCheckout();
    
     const checkoutPageObject = await pageobjectsmanager.getCheckoutPageObject();
  await checkoutPageObject.selectCountryFromCheckoutPage(country_initials,actual_country);
  await checkoutPageObject.checkEmailCorrect(data.email);
  await checkoutPageObject.PlaceOrderClick();
  
 // const thankYouPageObject = await pageobjectsmanager.getThankuPageObject();
  

  await thankYouPageObject.validateThankYouMessage(data.thankyoumsg);
 //await page.pause();
} )

}


customTest("New Fixture Data Driven Test" ,async ({page,testDataForOrder})=>{

   allure.epic("Custom Test case")
   allure.story("Select Item from orders page");
   const  pageobjectsmanager = new POManager(page);
  // const email = "goyalsumit319@gmail.com";
   //const thankyoumsg  = " Thankyou for the order. ";
   //const pass = "Subh@1987#!!";
   //const product_Name = "iphone 13 pro";
   const products = page.locator("[class='card-body']");
   const loginPage =await pageobjectsmanager.getLoginPageObject();
    const country_initials = "xxxxxxxx";
    const actual_country ="xxx"
   
   allure.label("Navigating to url","www.google.com");
    await loginPage.goTo();

    await loginPage.validLogin(testDataForOrder.email,testDataForOrder.pass);

   const dashboardPageObject = await pageobjectsmanager.getDashBoardPageObject(); //return DashBoardPageObject
   
   await dashboardPageObject.searchProduct_And_Add(testDataForOrder.product_Name); 
   allure.label("Navigating to cart page")
   await dashboardPageObject.navigateToCart();
     
   const cartPageObject = await pageobjectsmanager.getCartPageObject();
  await cartPageObject.checkItemDataCorrectOnCartpage(testDataForOrder.product_Name); //assertion performed
   await cartPageObject.clickCheckout();
   
    const checkoutPageObject = await pageobjectsmanager.getCheckoutPageObject();
 await checkoutPageObject.selectCountryFromCheckoutPage(country_initials,actual_country);
 await checkoutPageObject.checkEmailCorrect(testDataForOrder.email);
 await checkoutPageObject.PlaceOrderClick();
 
 const thankYouPageObject = await pageobjectsmanager.getThankuPageObject();
await thankYouPageObject.validateThankYouMessage(testDataForOrder.thankyoumsg);


})

