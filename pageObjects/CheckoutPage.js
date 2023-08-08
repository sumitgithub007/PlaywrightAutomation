const {   expect } = require('@playwright/test');
class CheckoutPage
{

constructor(page)
{
    this.page=page;
  
    this.country = this.page.locator("[placeholder='Select Country']");
    this.fetchallcountry =this.page.locator(".ta-results");
    this.placeOrderButton = this.page.locator(".action__submit");
    this.emailDisplayed = page.locator("label[style='color: lightgray; font-weight: 600;']");
}


async selectCountryFromCheckoutPage(nameCountry,actual_country)
{
    
  // await page.locator("//*[text()='Checkout']").click();
   await   this.country.type(nameCountry,{delay:100});
     const dropdown =  this.fetchallcountry;
     await dropdown.waitFor();
      
     const optionsCount = await dropdown.locator("span").count();
     console.log("count is = "+optionsCount);
    for(let i=0;i<optionsCount;++i)
    {
       const country =  await dropdown.locator("span").nth(i).textContent();
       console.log("xxxx = "+country);
       if(country.includes(actual_country))
       {
         await dropdown.locator("span").nth(i).click();
         break;
       }
 
    }
}

async checkEmailCorrect(email)
{ 
    await expect(this.emailDisplayed).toHaveText(email);   
}

async PlaceOrderClick()
{
    await this.placeOrderButton.click();
}


}

module.exports= {CheckoutPage};