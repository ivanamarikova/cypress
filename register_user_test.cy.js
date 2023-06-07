import { HomePage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/home_page";
import { RegistrationPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/registration_page";


describe('Registration Flow', () => {
    const homePage = new HomePage();
    const registrationPage = new RegistrationPage();

    beforeEach(() => {
        homePage.visit();
    });

    it('should fill and submit registration form', () => {
        homePage.openRegistration();
        registrationPage.fillRegistrationForm('Ivana Marikova', 'marikova.ivana@gmail.com', 'heslo1234');
        registrationPage.submitRegistrationForm();
        // vytvořit registraci
    });
});

