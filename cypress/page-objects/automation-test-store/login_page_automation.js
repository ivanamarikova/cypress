export class LoginPageAutomation {
    constructor() {
        this.loginUrl = "https://automationteststore.com/index.php?rt=account/login";
        this.loginName = '#loginFrm_loginname';
        this.password = '#loginFrm_password';
        this.loginButton = "button[title='Login']";
    }

    openAutomationTestStoreLogin() {
        cy.visit(this.loginUrl);
        return this;
    }

    typeLoginName(loginName) {
        cy.get(this.loginName).type("ivana23");
        return this;
    }

    typePassword(password) {
        cy.get(this.password).type("error23");
        return this;
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }
}
