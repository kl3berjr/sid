import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';

test('colaborador', async () => {
    const browser: Browser = await chromium.launch();

    const context: BrowserContext = await browser.newContext({
        ignoreHTTPSErrors: true
    });

    const page: Page = await context.newPage();

    await page.goto('https://atualizacao-cadastral.development.local/');

    await page.waitForLoadState('load');

    await page.locator('xpath=/html/body/div[1]/div/div/div[3]/form/div[1]/div/input').fill("08636103665");
  
    await page.locator('xpath=//*[@id="Password"]').click();
  
    await page.locator('xpath=//*[@id="Password"]').fill("@Setic2025");

    await page.locator('xpath=//*[@id="validation-login"]/button').click();

    await page.locator('xpath=//html/body/aside/div[2]/ul/li[2]/a').click(); //home

    await expect(page.getByRole('heading', { name: 'Status da Atualização Cadastral' })).toBeVisible();

    await page.locator('xpath=//html/body/aside/div[2]/ul/li[3]/a').click(); //atualizar

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[1]/a/span').click(); //DP

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[2]/a/span').click(); //EC

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[3]/a/span').click(); //Dependentes
        
        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[4]/a/span').click(); //Contatos

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[5]/a/span').click(); //Endereço

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[6]/a/span').click(); //Escolaridade

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[7]/a/span').click(); //Cursos

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[8]/a/span').click(); //Registros

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[9]/a/span').click(); //declarações

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[10]/a/span').click(); //PV

        await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[11]/a/span').click(); //Documentos
        

    await page.locator('xpath=//html/body/aside/div[2]/ul/li[5]/a').click(); //homologar

    await page.locator('xpath=//html/body/main/nav/div/div/ul/li[2]/a/i').click(); // icone

    //await page.locator('xpath=//html/body/main/div/div[1]/div/div/div/div/ul/li[1]/a/span').screenshot({ path: 'screenshot.png' });
});