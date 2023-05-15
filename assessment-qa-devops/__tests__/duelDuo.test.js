const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;
let botArray = 0;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  
  test(`Clicking an “Add to Duo” button should display the div with id = “player-duo”`, async () => {
      // Always need to navigate to the web app
      await driver.get("http://localhost:3000");
  
      // This is to locate the "Draw" button via the css id "draw" and click it
      await driver.findElement(By.css(`button[id="draw"]`)).click();
      
      // Click the first bot's 'add' button when the element exists
      await driver.wait(until.elementLocated(By.css(`button[class="bot-btn"]`))).click();

      // We wait until the header is revealed and store the element as a variable
      const playerDuo = await driver.wait(until.elementLocated(By.id(`player-duo`)));
    
      // Then we check if we return the element's id is "player-duo"
      expect(await playerDuo.getTagName()).toBe("div");
  });

  test(`Clicking an "See All Bots" button should should 10 bot cards`, async () => {
      // Always need to navigate to the web app
      await driver.get("http://localhost:3000");
  
      // This is to locate the "See All Bots" button via the css id "see-all" and click it
      await driver.findElement(By.css(`button[id="see-all"]`)).click();
      
      // We wait until the a bot card is created and count how many there are.
      await driver.wait(until.elementsLocated(By.css(".bot-card"))).then(elements => botArray = elements.length);

      // Then we check if there are 10 cards showing.
      expect(botArray).toBe(10);
  });

});
