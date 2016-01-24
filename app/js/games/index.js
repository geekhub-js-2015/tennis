class GameService {
    constructor() {
        this.saved = localStorage.getItem('tennisGameStats');
        this.games = (localStorage.getItem('tennisGameStats') !== null) ? angular.fromJson(this.saved) : [{
            opponentName: 'computer',
            playerScore: 21,
            opponentScore: 11
        }];
        localStorage.setItem('tennisGameStats', angular.toJson(this.games));
    }

    addGame(opponentName, playerScore, opponentScore) {
        this.games.push({
            opponentName, playerScore, opponentScore, time: new Date()
        });
        localStorage.setItem('tennisGameStats', angular.toJson(this.games));
    }

    getWinPercent() {
        let currentDate = new Date(),
            startDayPrevMonth = new Date(currentDate.getTime()),
            countGames = 0,
            winAmount = 0;

        startDayPrevMonth.setMonth(startDayPrevMonth.getMonth() - 1);

        for (var game in this.games) {

            let gameTime = new Date(this.games[game].time);

            if (gameTime.getTime() >= startDayPrevMonth.getTime()) {
                countGames++;

                if (this.games[game].playerScore > this.games[game].opponentScore) {
                    winAmount++;
                }
            }
        }

        return 100 / countGames * winAmount;
    }

    getLosePercent() {

        return 100 - this.getWinPercent();
    }

}

export default GameService;
