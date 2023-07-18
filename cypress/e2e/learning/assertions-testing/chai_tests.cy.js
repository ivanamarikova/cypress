import { LoginPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/login_page.js";

describe("Fluent Login tests", () => {
    beforeEach(() => {
        new LoginPage()
            .openPmtool()
            .typeUsername("test");
    });

    it("Login header has text 'Login'", () => {
        cy.get("h3.form-title").should("have.text", "Login");
    });

    it("Login header contains text 'Logi'", () => {
        cy.get("h3.form-title").should("contain.text", "Logi");
    });

    it("Username has value", () => {
        new LoginPage().typeUsername;
        cy.get("#username").should("have.value", "test");
    });

    it.only("Username input has form-control class", () => {
        cy.get('#username').should("have.class", "form-control");
    });

    it.only("Login button is visible.", () => {
        cy.get(".btn").should("be.visible");
    });

    it.only("Login button exist", () => {
        cy.get(".btn").should("exist");
    });

    it.only("Username has placeholder 'Username'", () => {
        cy.get("#username").should("have.attr", "placeholder", "Username");
    });


});
