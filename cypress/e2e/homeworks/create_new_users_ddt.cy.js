import ddtUsersRole from '../../fixtures/ddt_users_role.json';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../../page-objects/pmtool/login_page';
import { MenuSection } from '../../page-objects/pmtool/menu_section';
import { HeaderSection } from '../../page-objects/pmtool/header_sections';
import { NewUserFormModal } from '../../page-objects/pmtool/new_user_form_modal';

describe("Users tests", () => {
    beforeEach(() => {
        new LoginPage()
            .openPmtool()
            .typeAdminUserName(Cypress.env("pmtool_username"))
            .typeAdminPassword(Cypress.env("pmtool_password"))
            .clickLogin();

        new MenuSection().clickUsers();
    });

    describe("Create new users tests", () => {
        ddtUsersRole.forEach((user) => {
            it(`creates a new user with role "${user.role}" and logs in`, () => {
                const username = `${user.name_prefix}${faker.datatype.number({ max: 99999 })}`;
                const exampleEmail = faker.internet.exampleEmail();
                const firstName = faker.name.firstName();
                const lastName = faker.name.lastName();
                let newUserCredentials = null;

                new NewUserFormModal()
                    .clickAddUserButton()
                    .waitForProgressBarVanish()
                    .selectUserStatus()
                    .selectAccesGroup(user.role)
                    .typeUsername(username)
                    .typePassword(user.password)
                    .typeFirstName(firstName)
                    .typeLastName(lastName)
                    .typeUserEmail(exampleEmail)
                    .selectLanguage()
                    .clickSaveButtonUser();

                new HeaderSection().clickProfile().clicklogout();

                newUserCredentials = { username, password: user.password };

                new LoginPage().loginWithNewUserCredentials(newUserCredentials.username, newUserCredentials.password);


                cy.contains('.username', firstName);
            });
        });
    });
});
