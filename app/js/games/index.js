class GameService {
    constructor() {
        this.saved = localStorage.getItem('tennisGameStats');
        this.games = (localStorage.getItem('tennisGameStats') !== null) ? JSON.parse(this.saved) : [{
            opponentName: 'computer',
            playerScore: 21,
            opponentScore: 11
        }];
        localStorage.setItem('tennisGameStats', JSON.stringify(this.games));
    }

    addGame(opponentName, playerScore, opponentScore) {
        this.games.push({
            opponentName, playerScore, opponentScore, time: new Date()
        });
        localStorage.setItem('tennisGameStats', JSON.stringify(this.games));
    }


}

export default GameService;
