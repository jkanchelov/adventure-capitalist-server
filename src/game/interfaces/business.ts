import Manager from "./manager";

export default interface Business {
    name: string;
    shopsQuantity: number;
    manager: Manager;
    money: number;

    nextShopPrice(): number;

    start(): void;
    addManager: (manager: Manager) => void;
    upgrade(upgradeMultiplier: number): void;
    buyShop(): void;
    isWorking(): boolean;
    remainingCompleteJobTime(): number;
    setTimePerCycle(timePerCycle: number): void;
}
