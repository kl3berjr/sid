import { test, expect } from '@playwright/test';

test('perfil chefe imediato', async ({ page }) => {
    await page.goto('https://sid.treinamento.ro.gov.br/');
    
    await page.locator('xpath=/html/body/div/main/div[3]/a').click();
  
    await page.locator('xpath=//*[@id="validation-login"]/div[1]/div').click();
  
    await page.locator('xpath=/html/body/div[1]/div/div/div[3]/form/div[1]/div/input').fill("08636103665");
  
    await page.locator('xpath=//*[@id="Password"]').click();
  
    await page.locator('xpath=//*[@id="Password"]').fill("@setic2023");

    await page.locator('xpath=//*[@id="validation-login"]/button').click();
    
    await page.locator('xpath=/html/body/div/main/div[3]/div[1]/label/label').click(); // botao segep

    await page.locator('xpath=/html/body/div/main/div[3]/div[4]/button').click(); // perfil CI

    await page.locator('xpath=/html/body/div[1]/div[3]/div[1]/div[4]/div[1]/ul/li[3]/a/em').click();
})