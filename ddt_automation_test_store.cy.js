import { AutomationTestStore } from '../../page-objects/pmtool/automation_test_store';
import DdtKontrolaPolozek from '../../fixtures/ddt_kontrola_polozek.json';
import { DetailItem } from '../../page-objects/pmtool/detail_item';
o
describe("DDT kontrola položek", () => {
    const automationteststore = new AutomationTestStore();

    beforeEach(() => {
        automationteststore.visitHomePage();
    });

    DdtKontrolaPolozek.forEach((productData) => {
        it(`Verify product: ${productData.productName}`, () => {
            let productPage;
            try {
                switch (productData.productName) {
                    case 'Skinsheen Bronzer Stick':
                        productPage = automationteststore.clickItem1();
                        break;
                    case 'BeneFit Girl Meets Pearl':
                        productPage = automationteststore.clickItem2();
                        break;
                    case 'Benefit Bella Bamba':
                        productPage = automationteststore.clickItem3();
                        break;
                    case 'Tropiques Minerale Loose Bronzer':
                        productPage = automationteststore.clickItem4();
                        break;
                    default:
                        throw new Error(`Unknown product: ${productData.productName}`);
                }

                // Wait
                cy.wait(1000);

                // Ověření detailu produktu
                const detailItem = new DetailItem();

                // Timeout
                detailItem.getProductName().should('contain', productData.productName, { timeout: 5000 });
                detailItem.getProductDescription().should('contain', productData.productDescription, { timeout: 5000 });
                detailItem.getProductPrice().should('contain', productData.productPrice, { timeout: 5000 });
                detailItem.getProductModel().should('contain', productData.productModel, { timeout: 5000 });

                // Zpět na HomePage
                cy.go('back');
            } catch (error) {
                // Errors
                cy.log(`Error occurred: ${error.message}`);
            }
        });
    });
});
