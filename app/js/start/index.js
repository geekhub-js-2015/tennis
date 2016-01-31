class StartController {
    constructor(GameService, $state) {
        this.GameService = GameService;
        this.games = this.GameService.games;
        this.$state = $state;

        this.opponentName = '';
        this.opponentScore = 0;
        this.playerScore = 0;
    }

    getAllOpponentName() {
        let opponentNames = [];

        for (let i = 0; i < this.games.length; i++) {
            opponentNames.push([this.games[i].opponentName]);
        }

        return this.arrNoDupe(opponentNames);

    }

    arrNoDupe(a) {
        var temp = {};
        for (var i = 0; i < a.length; i++)
            temp[a[i]] = true;
        var r = [];
        for (var k in temp)
            r.push(k);
        return r;
    }

    save() {
        this.GameService.addGame(this.opponentName, this.opponentScore, this.playerScore);
        this.$state.go('main');
    }
}

export default StartController;
