class MainController {
    constructor(GameService) {
        this.GameService = GameService;
        this.games = GameService.games;
        this.editingData = {};
        for (var i = 0, length = this.games.length; i < length; i++) {
            this.editingData[i] = false;
        }

        console.dir(this.games);
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

    edit(id, value) {
        this.GameService.edit(id, value);
    }
}

export default MainController;
