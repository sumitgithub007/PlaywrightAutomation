const {  expect } = require('@playwright/test');

class DashboardPage{


constructor(page)
{
  this.page=page;
  this.products = page.locator("[class='card-body']");
   // this.navigateCartPage = page.locator("button[routerlink='/dashboard/cart']");
    this.greenboxText = page.locator("div[role='alert']");
    this.cartPage =   page.locator("button[routerlink='/dashboard/cart']");
   
}

async searchProduct_And_Add(product_Name)
{

  await this.products.first().waitFor();

  const count_products = await this.products.count();
    console.log(count_products);
    for(let i=0;i<count_products;++i)
    {
       let   text = await this.products.nth(i).locator("b").textContent();
       console.log(i+" = "+text);
         if(text===product_Name)
         {
             await this.products.nth(i).locator("button[style='float: right;']").click();
             break;
         }
 
    }
    const greenbox =await this.greenboxText.textContent();
    expect(await this.greenboxText.textContent()).toContain("Product Added To Cart");
     console.log(greenbox); 
}

async navigateToCart()
{
 this.cartPage.click();
}







}

module.exports = {DashboardPage};