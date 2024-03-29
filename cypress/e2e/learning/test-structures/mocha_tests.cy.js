import { LoginPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/login_page.js";

describe("Mocha tests", () => {
    beforeEach(() => {
        cy.viewport(800, 600);
        cy.log("runs before every test");
    });

    it("Visit pmtool", () => {
        new LoginPage().openPmtool();
    });

    it("Pmtool login", () => {
        new LoginPage()
            .openPmtool()
            .typeUsername("fifka_petr")
            .typePassword("Tredgate2023")
            .clickLogin();
    });

    afterEach(() => {
        cy.log("Function afterEach called");
    });
});