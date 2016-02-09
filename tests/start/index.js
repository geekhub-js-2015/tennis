describe('Add Controller', function () {

    var gameService;

    beforeEach(module("app"));

    var ctrl;

    beforeEach(function () {
        gameService = {
            games: [],
            addGame: function() {}
        };

        inject(function ($controller) {
            ctrl = $controller("AddController", {
                GameService: gameService
            });
        });
    });

    it('It saves a game', function() {
        ctrl.name = 'Fred';
        ctrl.hisName = 'Sasha';
        ctrl.points = 10;
        ctrl.hisPoints = 12;
        var date = new Date(0);
        ctrl.date = date;

        spyOn(gameService, 'addGame');

        ctrl.addGame();

        expect(gameService.addGame).toHaveBeenCalledWith('Fred', 'Sasha', 10, 12, date);
    });
});
