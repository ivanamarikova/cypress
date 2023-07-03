
import { TredgateEshop } from "../../page-objects/pmtool/tredgate_eshop";
import { tredgateLogin } from "../../page-objects/pmtool/tredgate_login";

describe("Header tests", () => {
    beforeEach(() => {
        const loginPage = new tredgateLogin();
        loginPage.openTredgateLogin();
    });

    it("Otevření registrace přes hlavičku", () => {
        new TredgateEshop().clickRegister();

    });
});


