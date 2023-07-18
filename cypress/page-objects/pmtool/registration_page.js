import { HeaderEshop } from "./header_eshop";

export class RegistrationPage extends HeaderEshop {
    constructor() {
        super();
        this.registrationurl = "http://tredgate.com/eshop/index.php?route=account/register";
        this.nameInput = '#input-firstname';
        this.nameInput2 = '#input-lastname';
        this.emailInput = '#input-email';
        this.telephoneInput = '#input-telephone';
        this.passwordInput = '#input-password';
        this.passwordInput2 = '#input-confirm';
        this.subscribe = 'AccountFrm_newsletter0'
        this.privacyInput = '#AccountFrm_agree';
        this.pokracovatButton = 'button["Continue"]';

    }

    clickRegister() {
        cy.get(this.RegisterAnchor).click();
    }

    fillRegistrationForm(name, email, password) {
        cy.get(this.nameInput).type("Ivana");
        cy.get(this.nameInput2).type("Maříková");
        cy.get(this.emailInput).type(email);
        cy.get(this.telephoneInput).type(776274584);
        cy.get(this.passwordInput).type("heslo1234");
        cy.get(this.passwordInput2).type("heslo1234");
    }

    submitRegistrationForm() {
        cy.get(this.privacyButton).click();
    }
}

export default RegistrationPage;
