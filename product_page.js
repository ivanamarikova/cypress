import { HeaderEshop } from "./header_eshop";

export class ProductPage extends HeaderEshop {
    constructor() {
        super();
        this.checkProductName = "h1";
        this.checkBrand = "#content";
        this.checkBrandType = "a[href='http://tredgate.com/eshop/index.php?route=product/manufacturer/info&manufacturer_id=8']"
        this.checkDefaultQuantitySelector = 'input#input-quantity';
        this.checkPriceSelector = 'h2';
        this.checkAddToCartButton = 'button#button-cart';
    }

    checkProductNameExist() {
        cy.get(this.checkProductName).should("exist");
        return this;
    }

    checkProductNameHaveText() {
        cy.get(this.checkProductName).should("have.text", "iPhone");
        return this;
    }

    checkBrandIsVisible() {
        cy.get(this.checkBrand).should("be.visible");
        return this;
    }

    checkBrandTypeHasText() {
        cy.get(this.checkBrandType).should("have.text", "Apple");
        return this;
    }

    checkPriceIsVisible() {
        cy.get(this.checkPriceSelector).should("be.visible");
        return this;
    }

    checkPriceContainText() {
        cy.get(this.checkPriceSelector).should("contain.text", "101.00€");
    }

    checkDefaultQuantityHasValue() {
        cy.get(this.checkDefaultQuantitySelector).should("have.value", "1");
        return this;
    }


    checkAddToCartButtonExists() {
        cy.get(this.checkAddToCartButton).should("exist");
        return this;
    }
}
