class EditController {
    constructor(GameService, $state, $stateParams) {
        this.GameService = GameService;
        this.$state = $state;

        this.gameIndex = $stateParams.index;
        this.game = GameService.games[this.gameIndex];

        console.log(this.game);
    }

    saveGame() {
        this.GameService.editGame(this.gameIndex, this.game.name1, this.game.name2, this.game.score1, this.game.score2);
        this.$state.go('main');
    }
}

export default EditController;
