import { BasePage } from "./base_page";

export class LostPasswordPage extends BasePage {
    constructor(path) {
        super("module=users/restore_password");
        this.usernameInput = "//input[@placeholder='Username']";
        this.emailInput = "//input[@placeholder='Email']";
        this.sendButton = '.btn-info';
        this.backForget = '#forget_password';
        this.backButton = '#back-btn';
        this.logo = "img";
        this.title = '.form-title';
    }

    usernameInputIsVisible() {
        cy.xpath(this.usernameInput).should("be.visible");
        return this;
    }

    usernameInputHasPlaceholder() {
        cy.xpath(this.usernameInput).should("have.attr", "placeholder");
        return this;
    }

    emailInputIsVisible() {
        cy.xpath(this.emailInput).should("be.visible");
        return this;
    }

    emailInputHasPlaceholder() {
        cy.xpath(this.emailInput).should("have.attr", "placeholder");
    }

    sendButtonIsVisible() {
        cy.get(this.sendButton).should("be.visible");
        return this;
    }

    sendButtonHasText() {
        cy.get(this.sendButton).should("have.text", "Send");
        return this;
    }

    backButtonIsVisible() {
        cy.get(this.backButton).should("be.visible");
        return this;
    }

    logoIsVisible() {
        cy.get(this.logo).should("be.visible");
        return this;
    }

    titleIsVisible() {
        cy.get(this.title).should("be.visible");
        return this;
    }

    titleHasText() {
        cy.get(this.title).should("have.text", "Restore Password");
        return this;
    }
}
