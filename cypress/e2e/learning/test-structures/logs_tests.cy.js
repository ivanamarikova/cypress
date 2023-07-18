describe('cy.log Tests', () => {

    it('Logging into Cypress', () => {
        cy.visit("https://tredgate.com/pmtool/");
        cy.log("Ahoj testere!");
    });
});