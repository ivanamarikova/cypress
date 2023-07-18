export class HeaderEshop {
    constructor() {
        this.ProfileMenuAnchor = ".caret";
        this.RegisterAnchor = "a[href='http://tredgate.com/eshop/index.php?route=account/register']";
        this.LoginAnchor = "a[href='http://tredgate.com/eshop/index.php?route=account/login']";
    }

    clickProfileMenu() {
        const { TredgateLogin } = require("./tredgate_login")
        cy.get(this.ProfileMenuAnchor).click();
        return this;
    }

    clickRegister() {
        const { RegistrationPage } = require("./registration_page")
        cy.get(this.RegisterAnchor).click({ force: true });
        return new RegistrationPage();
    }

    clickLogin() {
        const { TredgateLogin } = require("./tredgate_login")
        cy.get(this.LoginAnchor).click();
        return new TredgateLogin();
    }
}

