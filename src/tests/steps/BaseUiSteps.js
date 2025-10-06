const { Given, When, Then } = require('@cucumber/cucumber');
const { ChooseTablePage } = require('../pages/ChooseTablePage');
const { MenuPage } = require('../pages/MenuPage');


Given('the user opens Choose table page', async function () {
  this.chooseTablePage = new ChooseTablePage(this.page);
  await this.chooseTablePage.navigateToChooseTablePage();
});

When('the user enters a valid table number {int} and continue', async function (tableNumber) {
  await this.chooseTablePage.enterTableNumber(tableNumber);
});

Then('the user should navigate to the Menu page', async function () {
  this.menuPage = new MenuPage(this.page);
  await this.menuPage.assertTitle;
  await this.menuPage.assertAllergenInfo;
});
