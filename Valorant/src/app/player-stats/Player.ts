interface PlayerInterface {
    Nome: string;
    Rank: string;

}
class Player implements PlayerInterface {
    Nome: string;
    Rank: string;
    vinte: number;
    perse: number;
    giocate: number;
    percWinrate: number;
    rankimg: string;
    constructor() {
        Object.keys(this).map(key => key = undefined)
    }

}
export default Player