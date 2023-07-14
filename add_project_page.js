export class AddProjectPage {
    constructor() {
        this.Name = "div[data-testid="Name"] input"
        this.saveButton = '.modal-footer > .btn-primary'
        this.clickProfile = '.username'
        this.clickLogout = "#logout"
    }
    typeName(name) {
        cy.get(this.Name).type("Ivana");
        return this;
    }

    clicksaveButton() {
        cy.get(this.saveButton).click();
        return this;
    }

    Profile() {
        cy.get(this.clickProfile).click();
        return this;
    }

    Logout() {
        cy.get(this.clickLogout).click();
        return this;
    }

}
