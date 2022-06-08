import { test, expect, Page, Browser, BrowserContext, chromium,selectors, Locator } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://letcode.in/')
    await page.locator('text=Work Space').click();
    await page.locator('a:has-text("Dialog")').click();
    
});
  
  test.afterAll(async ({ page }) => {
  await page.close();
    
});
test('handle simple alert of alert ',async({page})=>{
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('text=Simple Alert').click();

})
test('handle confirm alert of alert ',async({page})=>{
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.locator('text=Confirm Alert').click();

})
test('handle prompt alert of alert ',async({page})=>{
  const ele=await page.$('#prompt')
  page.on('dialog', dialog => {
    console.log('message:' + dialog.message())
    console.log('Default Value :' + dialog.defaultValue())
    console.log('dialog Type:' + dialog.type())
    dialog.accept("Basavaraj")
  });
ele?.click();

})
test('handle modern alert of alert ',async({page})=>{
  const ele=await page.$('#modern')
  page.on('dialog', async dialog => {
    
  });
const msgOnModerndialog= await page.locator('p.title')

if(msgOnModerndialog){
await expect(msgOnModerndialog).toContainText('Modern Alert - Some people address me as sweet alert as well ');
console.log(msgOnModerndialog)
}

})



