import { eshopBasePage } from "./eshop_base_page";

export class TredgateEshop extends eshopBasePage {
    constructor(path) {
        super("route=product/product&product_id=40");
    }
}