class MainController {
    constructor(GameService) {
        this.games = GameService.games;
    }
}

export default MainController;
