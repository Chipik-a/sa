import {LoginPage} from "./pages/loginPage";
import {adminUser} from "./data/userData";

async function globalSetup() {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage();


    const loginPage = new LoginPage(page);
    await page.goto('/')
    await homePage.cookieButton.click();
    await homePage.loginButton.click();
    await loginPage.login(adminUser);
    await page.waitForURL('https://lxafitclub.passion.io/app/products')

    //сохранение состояния авторизации
    await context.storageState({ path: 'state.json'})

    await browser.close();
}

export default globalSetup;

