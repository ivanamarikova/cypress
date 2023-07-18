import { HeaderEshop } from "./header_eshop";

export class ProductPage extends HeaderEshop {
    constructor() {
        this.tredgateshop = "http://tredgate.com/eshop/";
        this.openIphone = "http://tredgate.com/eshop/index.php?route=product/product&product_id=40";
        this.checkDefaultQuantitySelector = 'input#input-quantity';
        this.checkPriceSelector = 'h2';
        this.checkAddToCartButtonExistsSelector = 'button#button-cart';
    }

    viewport() {
        cy.viewport(390, 844);
        return this;
    }

    openTredgate() {
        cy.visit(this.tredgateshop);
        return this;
    }

    OpenIphone() {
        cy.visit(this.openIphone);
        return this;
    }

    checkDefaultQuantity() {
        cy.get(this.checkDefaultQuantitySelector).should("have.value", "1");
        return this;
    }

    checkPrice() {
        cy.get(this.checkPriceSelector).should("contain.text", "101.00€");
        return this;
    }

    checkAddToCartButtonExists() {
        cy.get(this.checkAddToCartButtonExistsSelector).should("be.visible");
        return this;
    }
}
