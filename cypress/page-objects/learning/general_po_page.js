export class GeneralPoPage {
    constructor() {
        this.someElementSelector = "selektor";
    }
        someFunction(){
            cy.get(this.someElementSelector).click();
        }
    }
