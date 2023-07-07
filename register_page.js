export class RegisterPage {
    constructor() {
        this.url = "https://www.automationteststore.com/";
        this.registerButton = '#customer_menu_top';
        this.continueButton = '#accountFrm > fieldset > .btn';
        this.firstNameInput = '#AccountFrm_firstname';
        this.lastNameInput = '#AccountFrm_lastname';
        this.telephoneInput = '#AccountFrm_telephone';
        this.addressInput = '#AccountFrm_address_1';
        this.address2Input = '#AccountFrm_address_2';
        this.cityInput = '#AccountFrm_city';
        this.regionInput = '#AccountFrm_zone_id';
        this.postcodeInput = '#AccountFrm_postcode';
        this.countryInput = '#AccountFrm_country_id';
        this.loginnameInput = '#AccountFrm_loginname';
        this.passwordInput = '#AccountFrm_password';
        this.password2Input = '#AccountFrm_confirm';
        this.subscribeInput = 'input[name="newsletter"]';
        this.privacyInput = '#AccountFrm_agree';
        this.pokracovatButton = 'button[title="Continue"]';
        this.errorMessage = '.alert';
    }

    openAutomationTestStore() {
        cy.visit(this.url);
        return this;
    }

    openRegisterPage() {
        cy.get(this.registerButton).click();
        return this;
    }

    clickContinue() {
        cy.get(this.continueButton).click();
        return this;
    }

    typeFirstname() {
        cy.get(this.firstNameInput).type("Ivana");
        return this;
    }

    typeLastname() {
        cy.get(this.lastNameInput).type("Maříková");
        return this;
    }

    typeTelephone() {
        cy.get(this.telephoneInput).type("776274584");
        return this;
    }

    typeAddress() {
        cy.get(this.addressInput).type("Zelená 1");
        return this;
    }

    typeAddress2() {
        cy.get(this.address2Input).type("Zelená 2");
        return this;
    }

    typeCity() {
        cy.get(this.cityInput).type("Brno");
        return this;
    }

    selectRegion() {
        cy.get(this.regionInput).select("Vysocina");
        return this;
    }

    typePostcode() {
        cy.get(this.postcodeInput).type("63800");
        return this;
    }

    selectCountry(country) {
        cy.get(this.countryInput).select("Czech Republic");
        return this;
    }

    typeLoginname() {
        cy.get(this.loginnameInput).type("marikova.ivana");
        return this;
    }

    typePassword() {
        cy.get(this.passwordInput).type("1234");
        return this;
    }

    typePassword2() {
        cy.get(this.password2Input).type("1234");
        return this;
    }

    submitPrivacy() {
        cy.get(this.privacyInput).check();
        return this;
    }

    checkSubscribe() {
        cy.get(this.subscribeInput).check("0");
        return this;
    }

    clickPokracovatButton() {
        cy.get(this.pokracovatButton).click();
        return this;
    }

    getErrorMessage() {
        return cy.get(this.errorMessage);
    }
}