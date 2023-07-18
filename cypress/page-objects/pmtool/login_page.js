import { HomePage } from "./home_page";

export class LoginPage {
    constructor() {
        this.pmtoolUrl = "http://tredgate.com/pmtool/";
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = ".btn";
        this.pageHeader = "h3.form-title";
        this.alertDiv = ".alert-danger";
        this.logoImg = "img";
        this.projectsAnchor = "#Projects>a";
    }

    passwordIsVisible() {
        cy.get(this.passwordInput).should("be.visible");
        return this;
    }

    passwordHasPlaceholder(placeholder) {
        cy.get(this.passwordInput).should("have.attr", "placeholder", placeholder);
        return this;
    }

    logoIsVisible() {
        cy.get(this.logoImg).should('be.visible');
        return this;
    }

    usernameHasPlaceholder(placeholder) {
        cy.get(this.usernameInput).should("have.attr", "placeholder", placeholder);
        return this;
    }

    usernameIsVisible() {
        cy.get(this.usernameInput).should("be.visible");
        return this;
    }

    usernameHasValue(username) {
        cy.get(this.usernameInput).should("have.value", username);
        return this;
    }

    openPmtool() {
        cy.visit(this.pmtoolUrl);
        return this;
    }

    pageHeaderHasText(headerText) {
        cy.get(this.pageHeader).should("have.text", headerText);
        return this;
    }

    alertNotExist() {
        cy.get(this.alertDiv).should("not.exist");
        return this;
    }

    typeUsername(username) {
        cy.get(this.usernameInput).type("fifka_petr");
        return this;
    }

    typePassword(password) {
        cy.get(this.passwordInput).type("Tredgate2023");
        return this;
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
        return this;
    }
    clickProjects() {
        const { ProjectsPage } = require("./projects_page");
        cy.get(this.projectsAnchor).click();
        return new ProjectsPage();
    }

    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLoginButton();
        return new HomePage();
    }
}
