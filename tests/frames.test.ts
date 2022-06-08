import { test, expect, Page, Browser, BrowserContext, chromium,selectors, Locator } from '@playwright/test';
import { error } from 'winston';

test.beforeEach(async ({ page }) => {

    await page.goto('https://letcode.in/')
    await page.locator('text=Work Space').click();
    await (await page.locator('text=Inner HTML')).click()
  
    
});
  
  test.afterAll(async ({ page }) => {
  await page.close();
    
});

test('handle frmaes  ',async({page})=>{
  const frame=page.frame({name:"fname"})
  
  if(frame!=null){
    await frame.fill("input[name='fname']","Basavaraj")
    await frame.fill("input[name='lname']","Hukkeri")
    const frames=await frame.childFrames();
    console.log('No. of inner frames:'+ frames.length ) 
    if(frames!=null){
        await frames[0].fill("input[name='email']","bmhukkeri721@gmail.com")
   }
  } 

})

function email(arg0: string, email: any, arg2: string, arg3: string) {
    throw new Error('Function not implemented.');
}
