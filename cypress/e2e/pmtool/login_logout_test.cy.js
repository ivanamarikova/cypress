import { Homepage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Login and Logout Tests', () => {
    it('Login to pmtool', () => {
        const pmtoolLoginPage = new LoginPage();
        pmtoolLoginPage.openPmTool();
        pmtoolLoginPage.typeUsername("fifka_petr");
        pmtoolLoginPage.typePassword("Tredgate2023");
        pmtoolLoginPage.clickLogin()
    });

    it('Login and Logout test', () => {
        const pmtoolLoginPage = new LoginPage();
        const homepage = new Homepage();

        pmtoolLoginPage.openPmTool();
        pmtoolLoginPage.typeUsername("fifka_petr");
        pmtoolLoginPage.typePassword("Tredgate2023");
        pmtoolLoginPage.clickLogin();
        homepage.clickProfile();
        homepage.clickLogout();

    });




});