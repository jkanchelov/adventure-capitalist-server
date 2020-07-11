import Business from "./business";

export default interface Player {
    id: string;
    businesses: Business[];
    money: number;

    addBusiness: (business: Business) => void;
    upgradeBusiness: (business: Business) => void;
}
