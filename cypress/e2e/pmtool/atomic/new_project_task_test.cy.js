import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { NewTaskWindowPage } from "../../../page-objects/pmtool/new_task_window_page";
import { ProjectsTaskPage, ProjectsTasksPage } from "../../../page-objects/pmtool/projects_tasks_page";

describe('New project tasks tests', () => {
    beforeEach(() => {
        const username = Cypress.env("pmtool_username");
        const password = Cypress.env("pmtool_password");
        new LoginPage()
            .openPmtool()
            .typeUsername(username)
            .typePassword(password)
            .clickLogin();
        new ProjectsTasksPage("219").visit().clickAddTask();
    });

    context('Title tests', () => {
        it('Title is visible', () => {
            new NewTaskWindowPage().titleIsVisible();
        });

        it('Title has text', () => {
            new NewTaskWindowPage().titleHasText("Task Info");
        });
    });

    context('Name input tests', () => {
        it('Name is visible', () => {
            new NewTaskWindowPage().nameInputIsVisible();
        });
    });
});

