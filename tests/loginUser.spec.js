import { test, expect } from "@playwright/test";
import { text } from "stream/consumers";

test("TC002_Login User with correct credentials", async ({ page }) => {
  const myEmail = 'aabbasli2020@gmail.com'
  const myPassword = 'peoRia$2020'
  
  await page.goto('https://automationexercise.com/');
  
  await page.locator('a[href="/login"]').click();
  await page.locator('div .login-form input[type="email"]').fill(myEmail);
  await page.locator('input[type="password"]').fill(myPassword);
  await page.locator('div .login-form button.btn.btn-default').click();
  
  await expect.toHaveText('Logged in as Afa');
})
