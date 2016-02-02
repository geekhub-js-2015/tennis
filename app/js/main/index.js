class MainController {
    constructor(GameService) {
        this.games = GameService.games;
        this.statistic = GameService.statistic;
    }
}

export default MainController;
