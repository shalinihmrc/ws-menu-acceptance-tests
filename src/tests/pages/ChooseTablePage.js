const { expect } = require('@playwright/test');

class ChooseTablePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://order.jdwetherspoon.com/venue/pubs/95/tables';
    this.expectedTitle = 'Choose table - The Moon Under Water | Wetherspoon';
  }

  async navigateToChooseTablePage() {
    await this.page.goto(this.url);
    const checkboxes = this.page.locator('.checkbox-icon');
    await checkboxes.nth(0).click({ force: true });
    await checkboxes.nth(1).click({ force: true });
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.click('button.button-native'),
    ]);
    await expect(this.page).toHaveTitle(this.expectedTitle);
  }

  async enterTableNumber(tableNumber) {
    await this.page.fill('#ion-input-0', tableNumber.toString());
    await this.page.click('ion-button[type="submit"]');
  }
}

module.exports = { ChooseTablePage };
