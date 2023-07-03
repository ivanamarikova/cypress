import { HeaderEshop } from "./header_eshop";


export class TredgateEshop extends HeaderEshop {
    constructor() {
        super();
        this.HeaderEshop = "#top-links";
        cy.get(this.HeaderEshop).should("be.visible");
    }
}
