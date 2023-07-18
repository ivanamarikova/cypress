import { LoginPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/login_page.js"
describe("Login page tests", () => {
    beforeEach(() => {
        new LoginPage().openPmtool();
    });

    it("Page header has text 'Login'", () => {
        new LoginPage().pageHeaderHasText("Login");
    });
});