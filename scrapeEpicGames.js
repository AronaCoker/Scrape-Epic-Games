import puppeteer from "puppeteer";
import StealthPlugin from "puppeteer-extra-plugin-stealth";



async function scrapeEpicGames() {
    const browser = await puppeteer.launch({
        headless: false, // Zeigt den Browser an
        slowMo: 50,
        devtools: true,
        defaultViewport: null, // Volle Fenstergröße
    });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000);
    page.on("console", (msg) => console.log(msg.text())); // Protokolliert Konsolenausgaben der Seite

    await page.goto("https://www.epicgames.com/site/de/home", { waitUntil: "load" });


    const cookieButton = await page.$("#onetrust-reject-all-handler");
    if (cookieButton) {
        await page.waitForSelector("#onetrust-reject-all-handler", { visible: true });
        await cookieButton.click();
    }

    const cookieButton2 = await page.$("#onetrust-reject-all-handler");
if (cookieButton) {
  await page.waitForSelector("#onetrust-reject-all-handler", { visible: true });
  await cookieButton2.click();
}

    await page.waitForSelector("amain-link.parent")
    await page.click("amain-link.parent")

    await page.waitForSelector(
        "#dieselReactWrapper > div > div > div.css-1vplx76 > main > div.css-1dnikhe > div > div > div > div:nth-child(4) > div:nth-child(2) > span:nth-child(7) > div > div > section > div > div:nth-child(1) > div > div > div > a > div > div.css-1a6kj04 > div > h6")
    const gameName =
        element.querySelector(
            "#dieselReactWrapper > div > div > div.css-1vplx76 > main > div.css-1dnikhe > div > div > div > div:nth-child(4) > div:nth-child(2) > span:nth-child(7) > div > div > section > div > div:nth-child(1) > div > div > div > a > div > div.css-1a6kj04 > div > h6")?.innerText || "No title found";
    console.log(`Spiele name:${gameName}`)
}

scrapeEpicGames();
