const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

test("@Regression JQUERY DRAG DROP",async ({page})=>{

     
    await page.goto("https://jqueryui.com/droppable/");
  //  await page.screenshot({ path: 'screenshot99.png', fullPage: true });
   
  //expect(await page.screenshot({path:'sumitgoel.png'})).toMatchSnapshot({path:'sumit.png'});
   
    const frame=  page.frameLocator("iframe[class='demo-frame']");
     const source = frame.locator("div#draggable");
     const destination = frame.locator("div#droppable");
     await source.dragTo(destination);
    
    

     await page.locator("//*[text()='Accordion']").click();
     //await page.pause();

  
})