import { LoginPage } from "../../page-objects/pmtool/login_page";
import { LostPasswordPage } from "../../page-objects/pmtool/lost_password_page";

describe("Vytvoření atomických testů - PMTool - Lost Password page", () => {
    beforeEach(() => {
        new LoginPage()
            .openPmtool()
    });

    it('Otevře PMTool - Password forgotten obrazovku', () => {
        const lostPasswordPage = new LostPasswordPage();

        lostPasswordPage
            .clickBackForget()

        // Kontroly prvků na stránce PMTool - Password forgotten obrazovk

        cy.get("body").within(() => {

            // Kontrola viditelnosti, atributu a placeholderu pro pole Username

            cy.xpath(lostPasswordPage.usernameInput).should("be.visible");
            cy.xpath(lostPasswordPage.usernameInput).should("have.attr", "placeholder", "Username");

            // Kontrola viditelnosti, atributu a placeholderu pro pole Email

            cy.xpath(lostPasswordPage.emailInput).should("be.visible");
            cy.xpath(lostPasswordPage.emailInput).should("have.attr", "placeholder", "Email");

            // Kontrola viditelnosti a textu pro tlačítko Send

            cy.get(lostPasswordPage.sendButton).should("be.visible");
            cy.get(lostPasswordPage.sendButton).should("contain.text", "Send");
        });

        // Kontrola viditelnosti tlačítka Back, loga a nadpisu

        cy.get(lostPasswordPage.backButton).should("be.visible");
        cy.get(lostPasswordPage.logo).should("be.visible");
        cy.get(lostPasswordPage.title).should("be.visible");
        cy.get(lostPasswordPage.title).should("contain.text", "Restore Password");

        //Kontrola URL

        cy.url().should("match", /http:\/\/tredgate.com\/pmtool\/index.php\?module=users\/restore_password/);
    });
});



