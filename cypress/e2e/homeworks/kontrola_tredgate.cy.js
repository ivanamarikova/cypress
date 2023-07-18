import { ProductPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/product_page.js";

describe('Kontrola Tredgate Eshopu v mobilním zobrazení', () => {
    it('Otevření produktu iPhone a kontrola:', () => {
        const productPage = new ProductPage();

        productPage
            .viewport()
            .openTredgate()
            .OpenIphone()
            .checkDefaultQuantity()
            .checkPrice()
            .checkAddToCartButtonExists();
    });
});