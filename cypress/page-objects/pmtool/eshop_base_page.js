export class eshopBasePage {
    constructor(path) {
        this.eshopUrl = "http://tredgate.com/eshop/index.php?";
        this.path = path;
        //cy.log(`eshop url: ${this.baseUrl}${this.path}`)
    }

    visit() {
        cy.visit(this.eshopUrl + this.path);
        return this;
    }
}