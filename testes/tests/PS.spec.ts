import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';

test('colaborador', async () => {
    const browser: Browser = await chromium.launch();

    const context: BrowserContext = await browser.newContext({
        ignoreHTTPSErrors: true
    });

    const page: Page = await context.newPage();

    await page.goto('https://portaldoservidor.development.local/');

    //await page.waitForLoadState('load');

    await page.locator('xpath=//html/body/div/div/main/div[3]/a').click();

    await page.locator('xpath=/html/body/div[1]/div/div/div[3]/form/div[1]/div/input').fill("08636103665");
  
    await page.locator('xpath=//*[@id="Password"]').click();
  
    await page.locator('xpath=//*[@id="Password"]').fill("@Setic2025");

    await page.locator('xpath=//*[@id="validation-login"]/button').click();

    await page.locator('xpath=//html/body/div[2]/aside/div/div[1]/nav/ul/li[3]/a').click(); // Minhas Informações

        await page.locator('xpath=//html/body/div[2]/div[2]/div/div[2]/div[1]/a').click();
        await page.locator('xpath=//html/body/div[2]/div[2]/div/div[2]/div[2]/a').click();
        await page.locator('xpath=//html/body/div[2]/div[2]/div/div[2]/div[3]/a').click();
        await page.locator('xpath=//html/body/div[2]/div[2]/div/div[2]/div[4]/a').click();
        

    await page.locator('xpath=//html/body/div[2]/aside/div/div[1]/nav/ul/li[4]/a').click();

    await page.locator('xpath=//html/body/div[2]/aside/div/div[1]/nav/ul/li[4]/a').click();

    await page.locator('xpath=//html/body/div[2]/aside/div/div[1]/nav/ul/li[4]/a').click();

    await page.locator('xpath=//html/body/div[2]/aside/div/div[1]/nav/ul/li[4]/ul/li[2]/a').click();

    await page.locator('xpath=//html/body/div[2]/aside/div/div[1]/nav/ul/li[9]/a').click();

});