import { LoginPage } from "./login_page";

export class LostPasswordPage {
    constructor() {
        this.usernameInput = ':nth-child(2) > .input-icon > .form-control';
        this.emailInput = ':nth-child(3) > .input-icon > .form-control';
        this.sendButton = '.btn-info';
        this.backForget = '#forget_password';
        this.backButton = '#back-btn > .fa';
    }

    visit() {
        cy.visit('http://tredgate.com/pmtool/index.php?module=users/restore_password');
        return this;
    }

    fillUsername(username) {
        cy.get(this.usernameInput).type(username);
        return this;
    }

    fillEmail(email) {
        cy.get(this.emailInput).type(email);
        return this;
    }

    clickSendButton() {
        cy.get(this.sendButton).click();
        return this;
    }

    clickBackForget() {
        cy.get(this.backForget).click();
        return this;
    }

    clickBackButton() {
        cy.get(this.backButton).click();
        return new LoginPage();
    }
}
