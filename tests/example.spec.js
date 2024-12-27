// @ts-check
const { test, expect } = require('@playwright/test');
const {HomePage} = require("../pages/homePage");
// const {LoginPage} = require("../pages/loginPage");
// const {adminUser} = require("../data/userData");

test('has title', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('/app/products');
    await expect(page).toHaveURL('https://lxafitclub.passion.io/app/products')

   // await expect(page.url()).toBe('https://lxafitclub.passion.io/app/products')

});


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
