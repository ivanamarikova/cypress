import { HeaderSection } from "./header_sections";
import { ProjectTaskPage } from "./projects_tasks_page"

export class ProjectsPage extends HeaderSection {
    constructor() {
        super("module=items/items&path=21");
        this.pageTitle = ".page-title";
        this.firstProjectNameAnchorXpath = "//tr[contains[@test-id, 'project_id'))[1]//td[@test_id='Name']//a";
    }
    openFirstProjectDetail() {
        cy.xpath(this.firstProjectNameAnchorXpath).click();
        return new ProjectsTaskPage();
    }
}
