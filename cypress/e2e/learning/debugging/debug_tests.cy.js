describe("Debugging", () => {
    it("Using debug() function", () => {
        cy.visit("http://tredgate.com/pmtool/");
        cy.get("#username").type("fifka_petr");
        cy.get("#password").type("Tredgate2023");
        cy.get(".btn").debug().click();
    });
    it("Using pause() function", () => {
        cy.visit("http://tredgate.com/pmtool/");
        cy.get("#username").type("fifka_petr");
        cy.get("#password").type("Tredgate2023");
        cy.get(".btn").pause().click();
    });

});