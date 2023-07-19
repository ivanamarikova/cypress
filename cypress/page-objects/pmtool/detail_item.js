export class DetailItem {
    constructor() {
        this.productName = ".bgnone";
        this.productDescription = "#description > p";
        this.productPrice = ".productfilneprice";
        this.productModel = ".productinfo";
    }

    getProductName() {
        return cy.get(this.productName).invoke("text");
    }

    getProductDescription() {
        return cy.get(this.productDescription).invoke("text");
    }

    getProductPrice() {
        return cy.get(this.productPrice).invoke("text");
    }

    getProductModel() {
        return cy.get(this.productModel).invoke("text");
    }
}




