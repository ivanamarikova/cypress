import { ProductPage } from "../../page-objects/pmtool/product_page";
import { TredgateEshop } from "../../page-objects/pmtool/tredgate_eshop";

describe("Vytvoření atomických testů 2 - Tredgate Eshop - produkt", () => {
    beforeEach(() => {
        new TredgateEshop().visit();
    });

    context("Check product name tests", () => {
        it("checkProductName exists", () => {
            new ProductPage().checkProductNameExist();
        });

        it("checkProductName has text", () => {
            new ProductPage().checkProductNameHaveText();
        });
    });

    context("Check brand tests", () => {
        it("Check brand is visible", () => {
            new ProductPage().checkBrandIsVisible();
        });

        it("Check brand has text", () => {
            new ProductPage().checkBrandTypeHasText();
        });
    });

    context("Check price test", () => {
        it("Check price is visible", () => {
            new ProductPage().checkPriceIsVisible();
        });

        it("Check price contains text", () => {
            new ProductPage().checkPriceContainText();
        });
    });

    context("Check Default Quantity test", () => {
        it("Check Default Quantity Selector has value", () => {
            new ProductPage().checkDefaultQuantityHasValue();
        });
    });

    context("Check AddToCartButton test", () => {
        it("Check AddToCartButton exists", () => {
            new ProductPage().checkAddToCartButtonExists();
        });
    });
});
