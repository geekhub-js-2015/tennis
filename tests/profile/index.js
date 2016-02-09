describe('Profile Controller', function () {
    console.log('Test Profile Controller');

    var gameService;

    beforeEach(module("app"));

    var ctrl,
        stateParams;

    beforeEach(function () {
        gameService = {
            games: [{
                name1: 'Fred',
                name2: 'Sasha',
                score1: 21,
                score2: 10
            }, {
                name1: 'Sasha',
                name2: 'Fred',
                score1: 21,
                score2: 5
            }, {
                name1: 'Sasha',
                name2: 'Fred',
                score1: 10,
                score2: 10
            }],
            addGame: function() {}
        };

        stateParams = {
            name: "Fred"
        };

        inject(function ($controller) {
            ctrl = $controller("ProfileController", {
                GameService: gameService,
                $stateParams: stateParams
            });
        });
    });

    it('check filter game by user', function() {

        var gamesFiltered = ctrl.filterUserGame(gameService);

        expect(gamesFiltered[0].name1).toEqual('Fred');
        expect(gamesFiltered[1].name1).toEqual('Fred');

        expect(ctrl.wins).toEqual(1);
        expect(ctrl.draw).toEqual(1);

        expect(ctrl.userName).toEqual('Fred');


    });
});