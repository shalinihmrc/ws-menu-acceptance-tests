const { expect } = require('@playwright/test');

class MenuPage {
    constructor(page) {
        this.page = page;
        this.expectedTitle = 'Menus - The Moon Under Water | Wetherspoon';
    }
    async assertTitle() {
        await expect(this.page).toHaveTitle(this.expectedTitle);
    }

    async assertAllergenInfo() {
        await expect(page.locator('ion-button div')).toHaveText('Allergen and nutritional information');
    }
}

module.exports = { MenuPage };
