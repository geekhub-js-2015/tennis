describe('Add Controller', function () {

    var gameService;

    beforeEach(module("app"));

    var ctrl,
        stateParams;

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

});