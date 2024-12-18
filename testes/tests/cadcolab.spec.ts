import { test, chromium, Browser, BrowserContext, Page } from '@playwright/test';

test('colaborador', async () => {
    const browser: Browser = await chromium.launch();

    const context: BrowserContext = await browser.newContext({
        ignoreHTTPSErrors: true
    });

    const page: Page = await context.newPage();

    await page.goto('https://atualizacao-cadastral.development.local/');

    await page.locator('xpath=/html/body/div[1]/div/div/div[3]/form/div[1]/div/input').fill("08636103665");
  
    await page.locator('xpath=//*[@id="Password"]').click();
  
    await page.locator('xpath=//*[@id="Password"]').fill("@setic2023");

    await page.locator('xpath=//*[@id="validation-login"]/button').click();

    await page.locator('xpath=//html/body/aside/div[2]/ul/li[2]/a').click(); //home

    await page.locator('xpath=//html/body/aside/div[2]/ul/li[3]/a').click(); //atualizar

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[1]/a/span').click();

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[2]').click();

    await page.locator('xpath=//html/body/aside/div[2]/ul/li[5]/a').click(); //homologar

    await page.locator('xpath=//html/body/main/nav/div/div/ul/li[2]/a/i').click(); // icone
});