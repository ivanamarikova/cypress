export class RegisterPage {
    constructor() {
        this.url = "https://www.automationteststore.com/";
        this.registerbutton = '#customer_menu_top > li > a';
        this.continuebutton = '#accountFrm > fieldset > .btn';
        this.firstNameInput = '#AccountFrm_firstname';
        this.lastNameInput = '#AccountFrm_lastname';
        this.emailInput = '#AccountFrm_email';
        this.telephoneInput = '#AccountFrm_telephone';
        this.faxInput = '#AccountFrm_fax';
        this.companyInput = '#AccountFrm_company';
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
    }

    openRegisterPage() {
        cy.get(this.registerbutton).click();
    }

    clickContinue() {
        cy.get(this.continuebutton).click();
    }

    typeFirstname(firstName) {
        cy.get(this.firstNameInput).type("Ivana");
    }

    typeLastname(lastName) {
        cy.get(this.lastNameInput).type("1234");
    }

    typeEmail(email) {
        cy.get(this.emailInput).type("marikova.ivana@gmail.com");
    }

    typeTelephone(telephone) {
        cy.get(this.telephoneInput).type("776274584");
    }

    typeFax(fax) {
        cy.get(this.faxInput).type("abc");
    }

    typeCompany(company) {
        cy.get(this.companyInput).type("ABCD");
    }

    typeAdress(adress) {
        cy.get(this.addressInput).type("Zelená 2");
    }

    typeAdress2(adress2) {
        cy.get(this.address2Input).type("Zelená 3");
    }

    typeCity(city) {
        cy.get(this.cityInput).type("Brno");
    }

    typeRegion(region) {
        cy.get(this.regionInput).type("Morava");
    }

    typePostcode(postcode) {
        cy.get(this.postcodeInput).type("73802");
    }

    typeCountry(country) {
        cy.get(this.countryInput).type("Czech Republic");
    }

    typeLoginname(loginName) {
        cy.get(this.loginnameInput).type("ivana1")
    }

    typePassword(password) {
        cy.get(this.passwordInput).type("1234")
    }

    typePassword2(password2) {
        cy.get(this.password2Input).type("1234")
    }
    submitPrivacy(privacy) {
        cy.get(this.privacyInput).click();
    }

    clickSubmitButton(submitButton) {
        cy.get(this.submitButton).click();
    }
}