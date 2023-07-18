import { faker } from "@faker-js/faker";
describe("Faker test", () => {
    it("Generate and log data from faker", () => {
        cy.log(faker.person.fullName());
        cy.log(faker.internet.email());
        cy.log(faker.number.int({ min: 1000, max: 9999 }))
    });
});
