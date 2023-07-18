describe('Viewport Tests', () => {

    it('Resolution iPhone 8', () => {
        cy.viewport("iphone-8");
        cy.visit("https://tredgate.com/pmtool/");
    });
});