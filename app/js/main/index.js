class MainController {
    constructor(GameService) {
        this.GameService = GameService;
        this.games = GameService.games;
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
