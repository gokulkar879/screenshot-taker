const puppeteer = require("puppeteer");

describe("take scrrenshot", () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    })

    it("takes scrrenshot", async () => {
        await page.goto('http://localhost:5000');
        const image = await page.screenshot({ path: 'screenshot.png' });
    })

    afterAll(async () => {
        await browser.close();
    });
})

