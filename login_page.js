import { HomePage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/home_page.js";
export class LoginPage {
    constructor() {
        this.pmtoolUrl = "http://tredgate.com/pmtool/";
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = ".btn";
    }

    openPmtool() {
        cy.visit(this.pmtoolUrl);
        return this;
    }

    typeUsername(username) {
        cy.get(this.usernameInput).type(username);
        return this;
    }

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
        return new HomePage();
    }
}

