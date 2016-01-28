class ProfileController {
    constructor(GameService, $state) {
        this.GameService = GameService;
    }

    save() {
        this.GameService.addGame(this.name, this.hisName, this.points, this.hisPoints);
        this.$state.go('main');
    }
}

export default ProfileController;
