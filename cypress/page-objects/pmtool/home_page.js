import { HeaderSection } from "./header_sections";

export class HomePage extends HeaderSection {
    constructor() {
        super("module=dashboard/dashboard");
        this.welcomePageHeader = "#welcome-page-header";
        //* Tato kontrola se provede vzdy po vytvoreni HomePage
        cy.get(this.welcomePageHeader).should("be.visible");
    }
}
