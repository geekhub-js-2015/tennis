class MainController {
    constructor(GameService) {

        this.games = GameService.games
            .sort((v1, v2) => {
                if (v1.name1 === v2.name1) {
                    return v1.time > v2.time;
                }
                return v1.name1 > v2.name1;
            });
        this.percentagesList = this.percentages();
        this.viewGames = this.firstsOfGames(5);
        this.isCollapsed = true;
        this.isEdit = false;
    }

    percentages() {
        if (this.games.length < 1) {
            return 0;
        }
        var names = this.namesOfPlayers;
        var listOfPercentages = [];
        names.forEach((name)=> {
            let wins = 0;
            let totalGames = 0;
            this.games.forEach((game)=>{
                if (game.name1 == name || game.name2 == name) {
                    totalGames++;
                    if (game.name1 == name && game.score1 > game.score2
                        || game.name2 == name && game.score1 < game.score2) {
                        wins++;
                    }
                }

            });
            listOfPercentages.push({playerName: name, percent: ((wins/totalGames)*100).toFixed(2)});
        });
        return listOfPercentages;
    }

    firstsOfGames(number) {
        return this.games.slice(0, number);
    }

    showAll(){
        this.viewGames = this.games;
        this.isCollapsed = false;
    }

    startEdit(game){
        this.isEdit = true;
        this.editedGame = game;
    }

    get namesOfPlayers() {
        if (!this.games || this.games.length < 1) {
            return [];
        }
        var names = [];
        this.games.forEach((game)=>{
            if (names.indexOf(game.name1) == -1) {
                names.push(game.name1);
            }
            if (names.indexOf(game.name2) == -1) {
                names.push(game.name2);
            }
        });
        return names;



    }
}

export default MainController;
