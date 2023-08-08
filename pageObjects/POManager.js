const { DashboardPage } = require("./DashboardPage");
const { LoginPage } = require("./LoginPage");
const { CartPage } = require("./CartPage");
const { CheckoutPage } = require("./CheckoutPage");
const { ThankyouPage } = require("./ThankyouPage");


class POManager{

constructor(page)
{
    this.page=page;
    this.LoginPage = new LoginPage(this.page);
    this.dashBoardPage = new DashboardPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page); 
    this.thankyoupage = new ThankyouPage(this.page);

}

async getCartPageObject()
{
   return this.cartPage;
}

async getThankuPageObject()
{
    return this.thankyoupage;
}

async getCheckoutPageObject()
{
    return this.checkoutPage;
}

async getLoginPageObject()
{
  return   this.LoginPage;
}


async getDashBoardPageObject()
{
    return this.dashBoardPage;
}











}

module.exports = {POManager};