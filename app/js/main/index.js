class MainController {
    constructor(GameService) {

        this.GameService = GameService;
        this.games = this.GameService.games;
        this.editingData = {};
        this.limitOutputGame = 10;
        for (var i = 0, length = this.games.length; i < length; i++) {
            this.editingData[i] = false;
        }
    }

    getLimitDisplayGames() {
        return this.limitOutputGame;
    }

    loadMore() {
        if(this.limitOutputGame < this.games.length) {
            this.limitOutputGame += 10;
        }
    }

    modify(id) {
        this.editingData[id] = true;

    }

    update(id) {
        this.editingData[id] = false;
        localStorage.setItem('tennisGameStats', angular.toJson(this.games));

    }

    getWinPercent() {
        return this.GameService.getWinPercent();
    }

    getLosePercent() {
        return this.GameService.getLosePercent();
    }

    isWin(obj) {
        return obj.playerScore > obj.opponentScore;
    }

}

export default MainController;
