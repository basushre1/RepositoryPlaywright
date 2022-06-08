import { test, expect, Page, Browser, BrowserContext, chromium,selectors, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://letcode.in/')
    await page.locator('text=Work Space').click();
    
});
  
  test.afterAll(async ({ page }) => {
  await page.close();
    
});
test('Handle different types of buttons, navigate to home',async ({ page }) =>{
    await page.locator('text=Click').click();
    await page.locator('#home').click();
 
 

})
test('Find x and y coordinates',async ({ page }) =>{
  await page.locator('text=Click').click();
  await page.locator('#position').click()
  await page.waitForTimeout(3000);
  const box=await page.locator('#position').boundingBox()
  await page.mouse.click(box.x,box.y)
    console.log(box);

})
test('Find the color of the element',async ({ page }) =>{
  await page.locator('text=Click').click();
  const btn=await page.locator('#color')
  const color=await btn.evaluate((ele)=>{
  return window.getComputedStyle(ele).getPropertyValue("background-color");  

  });
console.log(color);
expect(color).toBe("rgb(138, 77, 118)"); 
 

})
test('Find whether element is enabled',async({page}) =>{
await page.locator('text=Click').click();
await page.locator('button.button.is-info').isDisabled();

})
test('Action on button click and hold',async({page}) =>{
  await page.locator('text=Click').click();
  await page.click('button:has-text("Button Hold!")',{
  delay: 3000


  })

 
  
  })