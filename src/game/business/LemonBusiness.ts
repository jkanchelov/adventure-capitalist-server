import Business from "./Business";

export default class LemonBusiness extends Business {
    /**
     *
     */
    constructor() {
        super(100, 1000);

        console.log("Lemon Business initialized");
    }
}
