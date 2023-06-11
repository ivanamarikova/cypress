export class AddItem {
    constructor() {
        this.homeUrl = "https://automationteststore.com/";
        this.itemUrl = "https://automationteststore.com/index.php?rt=product/product&product_id=50";
        this.addItem = '.cart';
        this.checkout = '#cart_checkout1';
        this.confirmButton = '#checkout_btn';
    }

    openHomeUrl() {
        cy.visit(this.homeUrl);
        return this;
    }

    openItemUrl() {
        cy.visit(this.itemUrl);
        return this;
    }

    clickAddItem() {
        cy.get(this.addItem).click();
        return this;
    }

    clickCheckout() {
        cy.get(this.checkout).click();
        return this;
    }

    clickConfirmButton() {
        cy.get(this.confirmButton).click();
        return this;
    }
}
