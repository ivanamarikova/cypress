import { LoginPage } from "./login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
    constructor(path) {
        super(path);
        this.profileDropdown = "#user_dropdown";
        this.logoutAnchor = "#logout";
    }

    clickProfile() {
        cy.get(this.profileDropdown).click();
        return this;
    }

    clicklogout() {
        cy.get(this.logoutAnchor).click();
        return new LoginPage();
    }
}