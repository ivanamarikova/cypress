import { LoginPage } from "../../page-objects/pmtool/login_page";
import { LostPasswordPage } from "../../page-objects/pmtool/lost_password_page";

describe('Ztracené heslo - end to end', () => {
    it('should visit the lost password page', () => {
        const lostPasswordPage = new LostPasswordPage();
        const loginPage = new LoginPage();

        loginPage.openPmtool();

        lostPasswordPage
            .visit()
            .fillUsername('lost_password_user')
            .fillEmail('lost_password@tredgate.cz')
            .clickSendButton();

        lostPasswordPage.clickBackForget();
    });

    it('Otevření stránky ztraceného hesla a návrat na login', () => {
        const lostPasswordPage = new LostPasswordPage();
        const loginPage = new LoginPage();

        lostPasswordPage
            .visit()
            .clickBackButton();

        return undefined;
    });
});

