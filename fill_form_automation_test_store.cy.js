import { RegisterPage } from "../../page-objects/automation-test-store/register_page";

describe('Vyplnění formuláře Automation Test Store', () => {
    const registerPage = new RegisterPage();

    it('Otevře eshop, vyplní formulář a zkontroluje varovnou hlášku', () => {
        registerPage.openAutomationTestStore();
        registerPage.openRegisterPage();
        registerPage.clickContinue();
        registerPage.typeFirstname();
        registerPage.typeLastname();
        registerPage.typeTelephone();
        registerPage.typeAddress();
        registerPage.typeAddress2();
        registerPage.typeCity();
        registerPage.selectCountry('Czech Republic');
        registerPage.selectRegion('Vysocina');
        registerPage.typePostcode();
        registerPage.typeLoginname();
        registerPage.typePassword();
        registerPage.typePassword2();
        registerPage.submitPrivacy();
        registerPage.checkSubscribe();
        registerPage.clickPokracovatButton();


        it("Select country", () => {

            cy.get("#AccountFrm_country_id").select("Czech Republic");
            cy.get("country_id").should("have.value", "56");
            cy.wait(1500);
            cy.get("#AccountFrm_zone_id").select("Vysocina");
            cy.get("zone_id").should("have.value", "901");

            cy.get('input[name="newsletter"]').check("0");
            cy.get('input[name="newsletter"]').should("be.checked");
        });

        registerPage.clickPokracovatButton();


        registerPage.getErrorMessage().should(
            'contain',
            'Email Address does not appear to be valid'
        );
    });
});
