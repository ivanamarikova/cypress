export class HomePage {
    constructor() {
        this.url = 'http://tredgate.com/eshop/';
        this.registerButton = 'Register';
    }

    visit() {
        cy.visit(this.url);
    }

    openRegistration() {
        cy.contains(this.registerButton).click({ force: true });
    }
}

