class StartController {
    constructor(GameService, $state) {
        this.GameService = GameService;
        this.$state = $state;

        this.opponentName = '';
        this.opponentScore = 0;
        this.playerScore = 0;
    }

    save() {
        this.GameService.addGame( this.opponentName,  this.opponentScore, this.playerScore);
        this.$state.go('main');
    }
}

export default StartController;
