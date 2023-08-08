class APIUtils{


    constructor(apiContext,payload)
    {
        this.apiContext=apiContext;
        this.payload=payload;
    }

       async getToken() {
        
              

        const loginResponse =await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
            data:this.payload});
   
            // expect((loginResponse).ok()).toBeTruthy();
            const loginresponseJson = await loginResponse.json();
               let  tokenValue =   loginresponseJson.token; 
            console.log("Token is = "+tokenValue);

            return tokenValue;

    }

        async createOrder(orderPayload)
        {
            
            let response={};
            response.token=await this.getToken();
            
     const orderResponse = await  this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
    data:orderPayload,
     headers:{
       'Authorization':response.token,
       'Content-Type':"application/json",
     }
     })
    const orderResponseJson = await  orderResponse.json();
    console.log(orderResponseJson);
        let order_Id=  await orderResponseJson.orders[0];
     console.log("Order id = "+order_Id);
       response.order_Id=order_Id;
     return response;
        
        }



}
module.exports={APIUtils};