describe('Edit Controller', function () {

    var gameService,
        stateParams;

    beforeEach(module("app"));

    var ctrl;

    beforeEach(function () {
        gameService = {
            games: [{
                name1: 'Fred',
                name2: 'Sasha',
                score1: 21,
                score2: 10
            }],
            addGame: function() {},
            editGame: function() {}
        };

        stateParams = {
            index: 0
        };

        inject(function ($controller) {
            ctrl = $controller("EditController", {
                GameService: gameService,
                $stateParams: stateParams
            });
        });
    });

    it('It edit a game', function() {
        expect(ctrl.gameIndex).toEqual(0);
        expect(ctrl.game.name1).toEqual('Fred');
        expect(ctrl.game.name2).toEqual('Sasha');
        expect(ctrl.game.score1).toEqual(21);
        expect(ctrl.game.score2).toEqual(10);

        spyOn(gameService, 'editGame');

        ctrl.saveGame();

        expect(gameService.editGame).toHaveBeenCalledWith(0,'Fred', 'Sasha', 21, 10);
    });
});
