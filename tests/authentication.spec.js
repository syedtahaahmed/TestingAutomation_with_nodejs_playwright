require('dotenv').config()

const VALID_EMAIL = process.env.VALID_EMAIL;
const VALID_PASSWORD = process.env.VALID_PASSWORD;
const VALID_USERNAME = process.env.VALID_USERNAME;

const INVALID_EMAIL = process.env.INVALID_EMAIL;
const INVALID_PASSWORD = process.env.INVALID_PASSWORD;
const INVALID_USERNAME = process.env.INVALID_USERNAME;



const { test, expect } = require('@playwright/test')

test('Login Check with correct creds', async ({ page }) => {
    //page to load to login to a website
    await page.goto('https://www.snapfish.com/loginto?next=https%3A%2F%2Fwww.snapfish.com%2Fhome');

    //check if banner popup is visisble then close it by clicking a button inside it.
    const container = page.locator('#onetrust-banner-sdk');
    if (await container.count() > 0 && await container.isVisible()) {
        await container.locator('#onetrust-accept-btn-handler').click();
        const signin = page.locator('#globalHeaderSignInRegister');
        await signin.click();
    }
    await (page.locator('#EmailAddress')).fill(VALID_EMAIL);
    await (page.locator('#Password')).fill(VALID_PASSWORD);
    await (page.locator('#login_submit').first()).click();
    await page.waitForTimeout(7000);
    const userMenu = page.locator('#globalHeaderUserMenu');
    await expect(userMenu).toBeVisible();
    const text = await userMenu.textContent();
    expect(text.trim()).toBe(`Hi,  ${VALID_USERNAME}`);
    await page.waitForTimeout(2000);

});


test('Login test with invalid creds', async ({ page }) => {
    //page to load to login to a website
    await page.goto('https://www.snapfish.com/loginto?next=https%3A%2F%2Fwww.snapfish.com%2Fhome');

    //check if banner popup is visisble then close it by clicking a button inside it.
    const container = page.locator('#onetrust-banner-sdk');
    if (await container.count() > 0 && await container.isVisible()) {
        await container.locator('#onetrust-accept-btn-handler').click();
        const signin = page.locator('#globalHeaderSignInRegister');
        await signin.click();
    }
    await (page.locator('#EmailAddress')).fill(INVALID_EMAIL);
    await (page.locator('#Password')).fill(INVALID_PASSWORD);
    await (page.locator('#login_submit').first()).click();
    await page.waitForTimeout(2000);
    const element = page.locator('#errorList .UserStatus');
    const hasClass = await element.evaluate(el => el.classList.contains('error'));
    expect(hasClass).toBe(true);
});
