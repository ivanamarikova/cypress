import { LoginPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/login_page.js";
import { ProjectsPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/projects_page.js";
import { AddProjectPage } from "/Users/ivanamarikova/GIT/cypress/cypress/page-objects/pmtool/add_project_page.js";

describe('Zalozeni projektu v pmtool', () => {
    it('create a new project in pmtool using fluent API', () => {
        const loginPage = new LoginPage();
        const projectsPage = new ProjectsPage();
        const addProjectPage = new AddProjectPage();

        loginPage
            .openPmtool()
            .typeUsername('fifka_petr')
            .typePassword('Tredgate2023')
            .clickLoginButton();

        projectsPage
            .openprojectPageUrl()
            .clickaddProjectButton();

        addProjectPage
            .typeName('Ivana')
            .clicksaveButton()
            .Profile()
            .Logout();
    });
});

