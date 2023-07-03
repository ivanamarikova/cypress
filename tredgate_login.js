
import { HeaderEshop } from "./header_eshop";

export class tredgateLogin extends HeaderEshop {
    constructor() {
        super();
        this.tredgateLoginUrl = "http://tredgate.com/eshop/";
    }

    openTredgateLogin() {
        cy.visit(this.tredgateLoginUrl);
    }
}