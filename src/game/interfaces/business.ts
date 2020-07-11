import Manager from "./manager";

export default interface Business {
    name: string;
    shopsQuantity: number;
    manager: Manager;
    completeJobTime: number;
    money: number;

    start(): void;
    addManager: (manager: Manager) => void;
    upgrade(): void;
    isWorking(): boolean;
    setProfitPerCycle(profitPrCycle: number): void;
    setTimePerCycle(timePerCycle: number): void;
}
