const  base  = require('@playwright/test');

exports.customTest=base.test.extend({

testDataForOrder:{

    
    email : "goyalsumit319@gmail.com",
    thankyoumsg  : " Thankyou for the order. ",
    pass : "Subh@1987#!!",
    product_Name :"adidas original"

}



})