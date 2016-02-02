class UserController {
    constructor(GameService, $stateParams) {
        this.games = GameService.games.filter((game) => game.name1 == $stateParams.name);
        this.name = $stateParams.name;
    }
}

export default UserController;
