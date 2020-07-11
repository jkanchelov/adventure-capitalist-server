import IBusiness from "../interfaces/business";
import Manager from "../interfaces/manager";

export default abstract class Business implements IBusiness {
    name: string;
    shopsQuantity: number;
    manager: Manager;
    completeJobTime: number;
    money: number;

    protected _isWorking = false;
    protected _profitPerCycle: number;
    protected _timePerCycle: number;
    /**
     *
     */
    protected constructor(profitPerCycle: number, timePerCycle: number) {
        this._profitPerCycle = profitPerCycle;
        this._timePerCycle = timePerCycle;
        this.money = 0;
    }

    addManager(manager: Manager): void {
        this.manager = manager;

        manager.business = this;
        manager.work();
    }

    start(): void {
        this._isWorking = true;

        setTimeout(() => {
            this._isWorking = false;

            this.money += this._profitPerCycle;
        }, this._timePerCycle);
    }

    isWorking(): boolean {
        return this._isWorking;
    }

    upgrade(): void {
        throw new Error("Method not implemented.");
    }

    setProfitPerCycle(profitPerCycle: number): void {
        this._profitPerCycle = profitPerCycle;
    }

    setTimePerCycle(timePerCycle: number): void {
        this._timePerCycle = timePerCycle;
    }
}
