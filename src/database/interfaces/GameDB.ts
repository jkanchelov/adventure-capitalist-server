import Player from "../../game/interfaces/player";

interface GameDb {
    getPlayer(): Player;
}

export default GameDb;
