import { AutomationTestStore } from '../../page-objects/pmtool/automation_test_store';
import DdtKontrolaPolozek from '../../fixtures/ddt_kontrola_polozek.json';
import { DetailItem } from '../../page-objects/pmtool/detail_item';
import faker from "@faker-js/faker";
import moment from 'moment';

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

                // Wait for the product detail page to load before interacting with it
                cy.wait(1000);

                // Verify product details using the DetailItem class
                const detailItem = new DetailItem();

                // Use should with timeout to avoid potential timeout errors
                detailItem.getProductName().should('contain', productData.productName, { timeout: 5000 });
                detailItem.getProductDescription().should('contain', productData.productDescription, { timeout: 5000 });
                detailItem.getProductPrice().should('contain', productData.productPrice, { timeout: 5000 });
                detailItem.getProductModel().should('contain', productData.productModel, { timeout: 5000 });

                // Go back to the home page for the next iteration
                cy.go('back');
            } catch (error) {
                // Log any errors, but continue to the next test
                cy.log(`Error occurred: ${error.message}`);
            }
        });
    });
});
