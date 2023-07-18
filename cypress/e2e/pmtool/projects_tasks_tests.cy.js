import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Projects Tasks tests', () => {
    beforeEach(() => {
        const username = Cypress.env("pmtool_username");
        const password = Cypress.env("pmtool_password")
        new LoginPage()
            .openPmtool()
            .typeUsername("fifka_petr")
            .typePassword("Tredgate2023")
            .clickLogin();
    });

    it('Open first Project', () => {
        new HomePage().clickProjects().openFirstProjectDetail();

    });
});
