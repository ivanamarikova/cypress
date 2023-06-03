describe('Operating with Cypress Tests', () => {

    it('Login test', () => {
        cy.visit("https://tredgate.com/pmtool/");
        cy.get('#username').type("fifka_petr");
        cy.get('#password').type("Tredgate2023");   
    });
        it.only('Login test with enter key submit', () => {
        cy.visit("https://tredgate.com/pmtool/");
        cy.get('#username').type("fifka_petr");
        cy.get('#password').type("Tredgate2023{enter}");
         
    });
    
});