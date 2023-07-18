import newProjectData from '../../fixtures/new_project_data.json';
import faker from "@faker-js/faker";
import moment from 'moment';
import { LoginPage } from '../../page-objects/pmtool/login_page';
import { NewProjectFormModal } from '../../page-objects/pmtool/new_project_form_modal';

describe("Data Driven Tests", () => {
    beforeEach(() => {
        new LoginPage()
            .openPmtool()
            .typeUsername(Cypress.env("pmtool_username"))
            .typePassword(Cypress.env("pmtool_password"))
            .clickLogin()
            .clickProjects()
            .clickNewProjectButton();
    });

    newProjectData.forEach((project) => {
        it(`DDT project: ${project.description}`, () => {
            //setup test data
            const project_name =
                project.name_prefix + faker.number.int({ max: 99999 });
            const start_date = getStartDate(project.start_date);
            //test steps
            new NewProjectFormModal()
                .selectPriority(project.priority)
                .selectStatus(project.status)
                .typeProjectName(project_name)
                .fillStartDate(start_date)
                .typeDescription(project.description)
                .clickSaveButton();
        });
    });
});

function getStartDate(start_date) {
    switch (start_date) {
        case "today":
            return moment().format("YYYY-MM-DD");
        case "tomorrow":
            return moment().add(1, "days").format("YYYY-MM-DD");
        case "yesterday":
            return moment().subtract(1, "days").format("YYYY-MM-DD");
        default:
            throw new Error("Invalid start date");
    }
}
