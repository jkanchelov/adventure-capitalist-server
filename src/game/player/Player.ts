import IPlayer from "../interfaces/player";
import Business from "../interfaces/Business";

export default class Player implements IPlayer {
    id: string;
    money: number;
    businesses: Business[];

    constructor() {
        console.log("Player initialized");
    }

    buyShop: (business: Business) => void;
    listBusinesses: () => Business[];
    addBusiness: (business: Business) => void;
    upgradeBusiness: (business: Business) => void;
}
