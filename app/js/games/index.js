class GameService {

    constructor(moment) {
        this.moment = moment;
        let saved = localStorage.getItem('tennisGameStats');
        this.games = (localStorage.getItem('tennisGameStats') !== null) ? angular.fromJson(saved) : [{
            opponentName: 'computer',
            playerScore: 0,
            opponentScore: 21,
            time: new Date()
        }];
        this.timeToObjDate();
    }


    timeToObjDate() {
        for (var id = 0; id < this.games.length; id++) {
            this.games[id].time = new Date(this.games[id].time);
        }
    }

    addGame(opponentName, playerScore, opponentScore, time) {
        this.games.push({
            opponentName, playerScore, opponentScore, time: new Date()
        });


        this.saveToStorage();
    }

    getWinPercent() {

        let lastMonthGames = this.games.filter(function (game, i, array) {
            let gameTime = this.moment();
            let startDayPrevMonth = gameTime.subtract(1, 'month');
            return gameTime >= startDayPrevMonth;
        }, this);

        let countGames = lastMonthGames.length;

        let winAmount = lastMonthGames.reduce(function (sum, game) {
            if (game.playerScore > game.opponentScore) {
                return sum+1;
            }
            return sum;
        }, 0);

        return 100 / countGames * winAmount;
    }

    saveToStorage() {
        localStorage.setItem('tennisGameStats', angular.toJson(this.games));
    }

    getLosePercent() {
        return 100 - this.getWinPercent();
    }


    save() {
        localStorage.games = JSON.stringify(this.games);
    }

    load() {
        try {
            this.games = JSON.parse(localStorage.games);
        } catch(e) {}

        if (!this.games) {
            this.clear();
        }
    }

}

export default GameService;
