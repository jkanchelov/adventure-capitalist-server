import Business from "./Business";

const earningPerShop = 5;
const timePerCycle = 1000;
const initialShopPrice = 10;

export default class LemonBusiness extends Business {
    /**
     *
     */
    constructor() {
        super(earningPerShop, timePerCycle, initialShopPrice);

        console.log("Lemon Business initialized");
    }
}
