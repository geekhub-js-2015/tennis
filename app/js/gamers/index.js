class GamersController {
	constructor(GameService) {
		this.GameService = GameService;
		this.games = GameService.games;
		this.users = GameService.users;
		this.showInfo = false;
	}
}

export default GamersController;
