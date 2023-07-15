import { LoginPage } from "./login_page";

export class AddProjectPage {
    constructor() {
        this.projectNameInput = 'div[data-testid="Name"] input';
        this.saveButton = '.modal-footer > .btn-primary';
        this.clickProfile = '.username';
        this.clickLogout = '#logout';
    }

    typeProjectName(project) {
        cy.get(this.projectNameInput).type(project);
        return this;
    }

    clickSaveButton() {
        cy.get(this.saveButton).click();
        return this;
    }

    clickProfileLink() {
        cy.get(this.clickProfile).click();
        return this;
    }

    clickLogoutButton() {
        cy.get(this.clickLogout).click();
        return LoginPage;
    }
}
