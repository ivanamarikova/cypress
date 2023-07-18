import { RegisterPage } from "../../page-objects/automation-test-store/register_page";

describe("Registration", () => {
    it("Register User", () => {
        let registerPage = new RegisterPage();
        registerPage.openAutomationTestStore();
        registerPage.openRegisterPage();
        registerPage.clickContinue();
        registerPage.typeFirstname();
        registerPage.typeLastname();
        registerPage.typeEmail();
        registerPage.typeTelephone();
        registerPage.typeAddress();
        registerPage.typeAddress2();
        registerPage.typeCity();
        registerPage.selectRegion();
        registerPage.typeLoginname();
        registerPage.typePostcode();
        registerPage.typePassword();
        registerPage.typePassword2();
        registerPage.submitPrivacy();
        registerPage.clickSubmitButton();


    });
});
