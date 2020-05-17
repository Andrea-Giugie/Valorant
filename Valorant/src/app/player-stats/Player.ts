interface PlayerInterface {
    Nome: string;
    Rank: string;

}
class Player implements PlayerInterface {
    Nome: string;
    Rank: string;
    constructor() {
        Object.keys(this).map(key => key = undefined)
    }

}
export default Player