import { HomePage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/home_page.js";
import { LoginPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/login_page.js";

describe("Fluent Login tests", () => {
    beforeEach(() => {
        const username = Cypress.env("pmtool_username");
        const password = Cypress.env("pmtool_password")
        new LoginPage()
            .openPmtool()
            .typeUsername("fifka_petr")
            .typePassword("Tredgate2023")
            .clickLogin();
    });

    it("Login to pmtool using Fluent API test", () => {
        new HomePage()
            .clickProfile()
            .clicklogout();
    });

    it("Login to pmtool using only pageobjects", () => {
        //! Zakomentovany kod - presunut do beforeEach
        // const loginPage = new LoginPage();
        const homePage = new HomePage();

        // loginPage.openPmtool();
        // loginPage.typeUsername("fifka_petr");
        // loginPage.typePassword("Tredgate2023");
        // loginPage.clickLogin();
        homePage.clickProfile();
        homePage.clicklogout();
    });
});