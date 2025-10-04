const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

//const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class CustomWorld {
  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.init();
});

After(async function () {
  await this.close();
});

// BeforeStep(async function () {
//   await delay(500);
// });
