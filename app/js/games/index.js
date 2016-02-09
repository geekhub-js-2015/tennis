class GameService {
    constructor() {
        if (localStorage.length == 0) {
            this.games = [];
        }
        else {
            this.games = angular.fromJson(localStorage.games);
        }
        this.statistic = this.statistics();

        this.games.forEach(function(item){
            item.time = new Date(item.time);
        });
    }


    addGame(name1, name2, score1, score2,time) {
        this.games.push({
            name1, name2, score1, score2, time: new Date()
        });
        this.statistic = this.statistics();
        this.save();
    }

    save() {
        localStorage.games = angular.toJson(this.games);
    }


    statistics() {
        let players = [];
        this.games.forEach(function (game) {
            let coincidence1 = false;
            let coincidence2 = false;

            for (let i = 0; i < players.length; i++) {
                if (game.name1 == players[i].name) {
                    if (game.score1 > game.score2) {
                        players[i].wins += 1;
                    }
                    players[i].matches += 1;
                    coincidence1 = true;
                }
            }
            for (let i = 0; i < players.length; i++) {

                if (game.name2 == players[i].name) {
                    if (game.score1 < game.score2) {
                        players[i].wins += 1;
                    }
                    players[i].matches += 1;
                    coincidence2 = true;
                    break;
                }
            }
            if (coincidence1 == false) {
                let win = 0;
                if (game.score1 > game.score2) {
                    win = 1;
                }
                else {
                    win = 0;
                }
                players.push({
                    name: game.name1,
                    matches: 1,
                    wins: win,
                    difTime: Date.parse( game.time )
                });
            }
            if (coincidence2 == false) {
                let win = 0;
                if (game.score1 < game.score2) {
                    win = 1;
                }
                else {
                    win = 0;
                }
                players.push({
                    name: game.name2,
                    matches: 1,
                    wins: win,
                    difTime:Date.parse( game.time )
                });
            }
        });

        return players;
    }
}
export default GameService;