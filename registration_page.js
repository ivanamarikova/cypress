export class RegistrationPage {
    constructor() {
        this.nameInput = '#input-firstname';
        this.nameInput2 = '#input-lastname'
        this.emailInput = '#input-email';
        this.telephoneInput = '#input-telephone';
        this.passwordInput = '#input-password';
        this.passwordInput2 = '#input-confirm';
        this.createButton = '.pull-right > .btn';
        this.checkbox = '[type="checkbox"]';
    }

    fillRegistrationForm(name, email, password) {
        cy.get(this.nameInput).type("Ivana");
        cy.get(this.nameInput2).type("Maříková")
        cy.get(this.emailInput).type(email);
        cy.get(this.telephoneInput).type(776274584);
        cy.get(this.passwordInput).type("heslo1234")
        cy.get(this.passwordInput2).type("heslo1234");
    }

    submitRegistrationForm() {
        cy.get(this.checkbox).click();
        cy.get(this.createButton).click();
    }
}





