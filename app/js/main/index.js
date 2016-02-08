class MainController {
    constructor(GameService) {
        this.gameService = GameService;
        this.games = GameService.games;
        this.statistic = GameService.statistic;
        this.showEdit = {};
        for (let i = 0; i < this.games.length; i++) {
            this.showEdit[i] = false;
        }
        this.limitTo = 10;
    }

    showEditfn(id) {
        (this.showEdit[id] == false) ? this.showEdit[id] = true : this.showEdit[id] = false;
    }

    isWin(obj) {
        return obj.score1 > obj.score2;
    }

    saveEdit(id) {
        this.showEdit[id] = false;
        this.gameService.save();
        this.statistic = this.gameService.statistics();
    }

    addMoreLimitTo() {
        this.limitTo += 10;
    }
}

export default MainController;