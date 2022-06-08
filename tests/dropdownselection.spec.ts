import { test, expect, Page, Browser, BrowserContext, chromium,selectors, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://letcode.in/')
    await page.locator('text=Work Space').click();
    await page.locator('a:has-text("Drop-Down")').click();
    
    
});
  
  test.afterAll(async ({ page }) => {
  //await page.close();
    
});
test('Select the drop down option fruit ',async({page}) =>{
  
  const fruit=await page.$('#fruits')
  await fruit?.selectOption("1")
  const msg=await page.$("notification is-success")
  if(msg){
  expect(msg.textContent()).toContain("You have selected Mango")
  console.log(msg);
  await page.waitForTimeout(5000);
  }
  
})
test('Select multiple super heros',async({page}) =>{
 const heros=await page.$('id=superheros')
 heros?.selectOption([{label:"Ant-Man"},{value:"ca"},{index:5}
   ])
await page.waitForTimeout(5000);
 

})
test("select the required language",async({page})=>{
  await page.locator('text=Select the last programming language and print all the optionsJavaScriptJavaPyth >> select').selectOption('sharp');
  const msg=await page.$("notification is-success")
  if(msg){
  expect(msg.textContent()).toContain("You have selected C#")
  console.log(msg);
  await page.waitForTimeout(5000);
  }   
})
test("select the country from drop down",async({page})=>{
  const country=await page.locator('#country').selectOption('India');
  await page.waitForTimeout(5000);
})