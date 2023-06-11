export class RegisterPage {
    constructor() {
        this.url = "https://www.automationteststore.com/";
        this.registerButton = '#customer_menu_top > li > a';
        this.continueButton = '#accountFrm > fieldset > .btn';
        this.firstNameInput = '#AccountFrm_firstname';
        this.lastNameInput = '#AccountFrm_lastname';
        this.emailInput = '#AccountFrm_email';
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
        this.privacyInput = '#AccountFrm_agree';
        this.submitButton = '.col-md-2 > .btn';
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

    typeFirstname(firstName) {
        cy.get(this.firstNameInput).type(firstName);
        return this;
    }

    typeLastname(lastName) {
        cy.get(this.lastNameInput).type(lastName);
        return this;
    }

    typeEmail(email) {
        cy.get(this.emailInput).type(email);
        return this;
    }

    typeTelephone(telephone) {
        cy.get(this.telephoneInput).type(telephone);
        return this;
    }

    typeAddress(address) {
        cy.get(this.addressInput).type(address);
        return this;
    }

    typeAddress2(address2) {
        cy.get(this.address2Input).type(address2);
        return this;
    }

    typeCity(city) {
        cy.get(this.cityInput).type(city);
        return this;
    }

    selectRegion(region) {
        cy.get(this.regionInput).select(region);
        return this;
    }

    typePostcode(postcode) {
        cy.get(this.postcodeInput).type(postcode);
        return this;
    }

    typeCountry(country) {
        cy.get(this.countryInput).type(country);
        return this;
    }

    typeLoginname(loginName) {
        cy.get(this.loginnameInput).type(loginName);
        return this;
    }

    typePassword(password) {
        cy.get(this.passwordInput).type(password);
        return this;
    }

    typePassword2(password2) {
        cy.get(this.password2Input).type(password2);
        return this;
    }

    submitPrivacy() {
        cy.get(this.privacyInput).click();
        return this;
    }

    clickSubmitButton() {
        cy.get(this.submitButton).click();
        return this;
    }
}
