
describe("Test na ztrátu hesla v PMTool", () => {
    it('Ztráta hesla v PMTool', { tags: '@e2e' }, () => {
        cy.visit("http://tredgate.com/pmtool/");
        cy.xpath("//a[@id='forget_password']").click();
        cy.xpath("//input[@placeholder='Username']").type("fifka_petr");
        cy.xpath("//input[@placeholder='Email']").type("petr.fifka@tredgate.cz");
        cy.xpath("//button[@type='submit']").click();

    })
})
