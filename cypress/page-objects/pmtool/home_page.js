import { HeaderSection } from "./header_sections";

export class HomePage extends HeaderSection {
    constructor() {
        super("module=dashboard/dashboard");
        this.welcomePageHeader = "#welcome-page-header";
    }

    checkWelcomeHeaderVisibility() {
        cy.get(this.welcomePageHeader).should("be.visible");
    }
}




