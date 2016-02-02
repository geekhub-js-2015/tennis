class MainController {
    constructor(GameService) {
        this.games = GameService.games
            .sort((v1, v2) => {
                if (v1.name1 === v2.name1) {
                    return v1.time > v2.time;
                }
                return v1.name1 > v2.name1;
            });
    }
}

export default MainController;
