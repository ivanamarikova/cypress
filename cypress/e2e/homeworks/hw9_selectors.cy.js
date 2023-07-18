import { AddProjectPage } from "../../page-objects/pmtool/add_project_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";

describe('Zalozeni projektu v pmtool', () => {
    it('create a new project in pmtool using fluent API', () => {
        const loginPage = new LoginPage();
        const projectsPage = new ProjectsPage();
        const addProjectPage = new AddProjectPage();

        loginPage
            .openPmtool()
            .typeUsername()
            .typePassword()
            .clickLoginButton();

        projectsPage
            .clickAddProjectButton()
            .expectAddProjectPage()
            .typeProjectName()
            .clickSaveButton();
    });
});


