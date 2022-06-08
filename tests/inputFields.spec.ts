import { test, expect, Page, Browser, BrowserContext, chromium,selectors, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://letcode.in/')
    await page.locator('text=Work Space').click();
    
});
  
  test.afterEach(async ({ page }) => {
  await page.close();
    
});
test('enter the full name in the input field',async ({ page }) =>{
  //await page.locator('text=Work Space').click();
  await expect(page).toHaveURL('https://letcode.in/test');
  // Click text=Edit
  await page.locator('text=Edit').click();
  await expect(page).toHaveURL('https://letcode.in/edit');
  await page.type("#fullName","Basavaraj Hukkeri");
  await page.waitForTimeout(3000);
  
});
test('Append a text at the last',async ({ page }) =>{
  //await page.locator('text=Work Space').click();
  await page.locator('text=Edit').click();
  const join= await page.$("#join")
  await join?.focus();
  await page.keyboard.press("End");
  await join?.type(" Human");
  await page.waitForTimeout(3000);
  
});
test('What is inside the text box',async ({ page }) =>{
  //await page.locator('text=Work Space').click();
  await page.locator('text=Edit').click();
  const text=await page.getAttribute("#getMe","value");
  console.log(text);
  await page.waitForTimeout(3000);

});
test('Clear the text',async ({ page }) =>{
  //await page.locator('text=Work Space').click();
  await page.locator('text=Edit').click();
  await page.fill("//input[@value='Koushik Chatterjee']","");
  await page.waitForTimeout(3000);

});
test('Field is enabled or not',async ({ page }) =>{
  await page.locator('text=Edit').click();
  await page.isDisabled("id=noEdit");
  await page.waitForTimeout(3000);
 

});
test('Verify the readOnly text',async ({ page }) =>{
  await page.locator('text=Edit').click();
  await expect(page.locator('#dontwrite')).toHaveAttribute('value', 'This text is readonly');
  await page.waitForTimeout(3000);

});