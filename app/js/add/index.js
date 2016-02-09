class AddController {
    constructor(GameService, $state) {
        this.GameService = GameService;
        this.$state = $state;

        this.name = '';
        this.hisName = '';
        this.points = 0;
        this.hisPoints = 0;
        this.date = new Date();
    }

    addGame() {
        this.GameService.addGame(this.name, this.hisName, this.points, this.hisPoints, this.date);
        this.$state.go('main');
    }
}

export default AddController;
