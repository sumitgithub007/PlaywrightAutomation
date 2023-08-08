class LoginPage{


constructor(page)
{
    this.page=page;
    this.logInbutton =  this.page.locator("#login");
    this.userEmail = this.page.locator("#userEmail");
    this.userPassword = this.page.locator("#userPassword");

}

async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client/");
}


async validLogin(email,password)
{
    
    await  this.userEmail.type(email);
    await this.userPassword.type(password);
 
    await this.logInbutton.click();
    await this.page.waitForLoadState('networkidle');
}











}
module.exports = {LoginPage};