export class ProjectsPage {
    constructor() {
        this.projectPageUrl = "http://tredgate.com/pmtool/index.php?module=items/items&path=21";
        this.addProjectButton = '.btn-primary'
    }
    openprojectPageUrl() {
        cy.visit(this.projectPageUrl);
        return this;
    }

    clickaddProjectButton() {
        cy.get(this.addProjectButton).click();
        return this;
    }

}