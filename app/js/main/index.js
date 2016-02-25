class MainController {
    constructor(GameService) {
        this.allGames = GameService.games
            .sort((v1, v2) => {
                if (v1.name1 === v2.name1) {
                    return v1.time > v2.time;
                }
                return v1.name1 > v2.name1;
            });

        this.games = [];
    }
}

export default MainController;
