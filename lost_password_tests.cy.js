import { LostPasswordPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/lost-password/lost_password_page";

describe('Ztracené heslo', () => {
    it('Ztracené heslo - end to end', () => {
        const lostPasswordPage = new LostPasswordPage();

        lostPasswordPage
            .visit()
            .fillUsername('lost_password_user')
            .fillEmail('lost_password@tredgate.cz')
            .clickSendButton();

        // Byla zobrazena potvrzovací zpráva

        lostPasswordPage.clickBackForget();

        // Vrácení na stránku ztraceného hesla
    });

    it('Otevření stránky ztraceného hesla a návrat na login', () => {
        const lostPasswordPage = new LostPasswordPage();

        lostPasswordPage.visit().clickBackButton();

        // Vrácení na stránku přihlášení
    });
});


