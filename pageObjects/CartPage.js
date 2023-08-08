const {   expect } = require('@playwright/test');
class CartPage{


constructor(page)
{
    this.page=page;
    this.itemoncartPage = this.page.locator("div[class='cart']>ul:nth-of-type(1) h3");
    this.checkoutButton = this.page.locator("//*[text()='Checkout']");

}


async checkItemDataCorrectOnCartpage(itemName){

    const cart_item_text =await  this.itemoncartPage.textContent();
    console.log(cart_item_text);
    await expect( this.itemoncartPage).toHaveText(itemName);
    
}


async clickCheckout()
{
    this.checkoutButton.click();
}










}
module.exports = {CartPage};