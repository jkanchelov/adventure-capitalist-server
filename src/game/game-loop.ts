import GameDB from "../database/interfaces/GameDB";

export default (db: GameDB): void => {
    setInterval(() => {
        console.log(`[${new Date().toString()}]`);
    }, 1000);
};
