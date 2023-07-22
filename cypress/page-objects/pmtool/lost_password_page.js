//
import { LoginPage } from "./login_page";

export class LostPasswordPage extends LoginPage {
    constructor() {
        super();
        this.url = "http://tredgate.com/pmtool/index.php?module=users/restore_password"
        this.usernameInput = "//input[@placeholder='Username']";
        this.emailInput = "//input[@placeholder='Email']";
        this.sendButton = '.btn-info';
        this.backForget = '#forget_password';
        this.backButton = '#back-btn';
        this.logo = "img";
        this.title = '.form-title';
    }

    fillUsername(username) {
        cy.xpath(this.usernameInput).type(username);
        return this;
    }

    fillEmail(email) {
        cy.xpath(this.emailInput).type(email);
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
