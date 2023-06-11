import { LoginPageAutomation } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/automation-test-store/login_page_automation";
import { AddItem } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/automation-test-store/add_item";
import { RegisterPage } from "../../page-objects/automation-test-store/register_page";

describe('Bonus úkol 9 - Procvičování selektorů a Cypress', () => {
    it('Automation Test Store - objednání položky', () => {
        const registerPage = new RegisterPage();
        const loginPage = new LoginPageAutomation();
        const addItem = new AddItem();

        registerPage
            .openAutomationTestStore()
            .openRegisterPage()
            .clickContinue()
            .typeFirstname("Ivana")
            .typeLastname("Marikova")
            .typeEmail("marikova.ivana@gmail.com")
            .typeTelephone("776274584")
            .typeAddress("Zelena 3")
            .typeAddress2("Krizikova 6")
            .typeCity("Praha")
            .selectRegion("Aberdeen")
            .typePostcode(73802)
            .typeCountry("Czech Republic")
            .typeLoginname("ivana23")
            .typePassword("error23")
            .typePassword2("error23")
            .submitPrivacy()
            .clickSubmitButton();

        loginPage
            .openAutomationTestStoreLogin()
            .typeLoginName()
            .typePassword()
            .clickLoginButton();

        addItem
            .openHomeUrl()
            .openItemUrl()
            .clickAddItem()
            .clickCheckout()
            .clickConfirmButton();
    });
});
