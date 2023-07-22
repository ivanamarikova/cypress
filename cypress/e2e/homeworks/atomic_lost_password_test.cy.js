import { LoginPage } from "../../page-objects/pmtool/login_page";
import { LostPasswordPage } from "../../page-objects/pmtool/lost_password_page";

describe("Vytvoření atomických testů - PMTool - Lost Password page", () => {
    beforeEach(() => {
        new LoginPage().openPmtool();
        new LostPasswordPage().visit();
    });

    context("UsernameInput tests", () => {
        it("UsernameInput is visible", () => {
            new LostPasswordPage().usernameInputIsVisible();
        });

        it("UsernameInput has placeholder", () => {
            new LostPasswordPage().usernameInputHasPlaceholder();
        });
    });

    context("EmailInput tests", () => {
        it("EmailInput is visible", () => {
            new LostPasswordPage().emailInputIsVisible();
        });

        it("EmailInput has placeholder", () => {
            new LostPasswordPage().emailInputHasPlaceholder();
        });
    });

    context("Send Button tests", () => {
        it("Send button is visible", () => {
            new LostPasswordPage().sendButtonIsVisible();
        });

        it("Send button has text", () => {
            new LostPasswordPage().sendButtonHasText("Send");
        });
    });

    context("Logo test", () => {
        it("Logo is visible", () => {
            new LostPasswordPage().logoIsVisible();
        });
    });

    context("Title tests", () => {
        it("Title is visible", () => {
            new LostPasswordPage().titleIsVisible();
        });

        it("Title has text", () => {
            new LostPasswordPage().titleHasText("Restore Password");
        });
    });
});



