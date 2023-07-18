beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
});

it("Check radio button", () => {
    cy.get("input[name='subscription']").check("basic");
    cy.get("#basic").should("be.checked");
});

it("Check 2 interests", () => {
    cy.get("input[name='interests[]']").check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get("input[name='interests[]']").check("reading");
    cy.get("#interests-reading").should("be.checked");
});
it("Check and uncheck checkbox", () => {
    cy.get("input[name='interests[]']").check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get("input[name='interests[]']").uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
});
it.only("Clean and fill name", () => {
    cy.get("#name").clear().type("Petr Fifka");
    cy.get("#name").should("have.value", "Petr Fifka");
});
