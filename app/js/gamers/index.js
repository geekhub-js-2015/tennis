class GamersController {
	constructor(GameService) {
		this.games = GameService.games;
		this.users = GameService.users;
	}
}

export default GamersController;
