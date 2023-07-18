import { DetailItem } from "./detail_item";

export class AutomationTestStore {
    constructor() {
        this.homeUrl = "https://automationteststore.com/";
        this.item1 = "div[id='block_frame_featured_1769'] a[title='Skinsheen Bronzer Stick']";
        this.item2 = "div[id='block_frame_featured_1769'] a[title='BeneFit Girl Meets Pearl']";
        this.item3 = "a[title='Benefit Bella Bamba']";
        this.item4 = "a[title='Tropiques Minerale Loose Bronzer']";
    }

    visitHomePage() {
        cy.visit(this.homeUrl);
        return this;
    }

    clickItem1() {
        cy.get(this.item1).click();
        return new DetailItem();
    }
    clickItem2() {
        cy.get(this.item2).click();
        return new DetailItem();
    }

    clickItem3() {
        cy.get(this.item3).click();
        return new DetailItem();
    }

    clickItem4() {
        cy.get(this.item4).click();
        return new DetailItem();
    }
}
