import IBusiness from "../interfaces/business";
import Manager from "../interfaces/manager";

export default abstract class Business implements IBusiness {
    name: string;
    manager: Manager;
    money: number;
    shopsQuantity: number;

    protected _isWorking: boolean;
    protected _earningPerShop: number;
    protected _timePerCycle: number;
    protected _startedJobTime: Date;
    protected _initialShopPrice: number;
    protected _upgrades: number[]; // upgrade values to multiply the profit with;

    protected constructor(
        earningPerShop: number,
        timePerCycle: number,
        shopPrice: number
    ) {
        this.money = 0;
        this.shopsQuantity = 1;

        this._earningPerShop = earningPerShop;
        this._timePerCycle = timePerCycle;
        this._isWorking = false;
        this._initialShopPrice = shopPrice;
        this._upgrades = [];
    }

    addManager(manager: Manager): void {
        this.manager = manager;

        manager.business = this;
        manager.work();
    }

    start(): void {
        this._isWorking = true;
        this._startedJobTime = new Date();

        setTimeout(() => {
            this.finishJob();
        }, this._timePerCycle);
    }

    remainingCompleteJobTime(): number {
        if (!this._startedJobTime) {
            // business not working
            return this._timePerCycle;
        } else {
            const timePassed =
                new Date().getTime() - this._startedJobTime.getTime();

            return this._timePerCycle - timePassed;
        }
    }

    isWorking(): boolean {
        return this._isWorking;
    }

    buyShop(): void {
        this.shopsQuantity += 1;
    }

    upgrade(upgradeMultiplier: number): void {
        this._upgrades.push(upgradeMultiplier);
    }

    nextShopPrice(): number {
        return this.shopsQuantity * this._initialShopPrice;
    }

    setTimePerCycle(timePerCycle: number): void {
        this._timePerCycle = timePerCycle;
    }

    protected finishJob() {
        this._isWorking = false;
        this._startedJobTime = null;

        this.money += this.calculateEarnedMoney();
    }

    protected calculateEarnedMoney(): number {
        let earnedMoney = this._earningPerShop * this.shopsQuantity;

        this._upgrades.forEach(upgradeMultiplier => {
            earnedMoney *= upgradeMultiplier;
        });

        return earnedMoney;
    }
}
