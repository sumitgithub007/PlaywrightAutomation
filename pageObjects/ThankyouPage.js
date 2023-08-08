const {   expect } = require('@playwright/test');
class ThankyouPage{


constructor(page)
{
    this.page=page;
    this.thankyoumsg  = this.page.locator(".hero-primary");
    this.orderid = this.page.locator("label[class='ng-star-inserted']")
}


async validateThankYouMessage(msg)
{
  // await this.page.pause();
    await expect(this.thankyoumsg).toHaveText(msg);
   let orderId = await  this.orderid.textContent();
    orderId =orderId.split(" ")[2];
   console.log(orderId);
}


}

module.exports={ThankyouPage}