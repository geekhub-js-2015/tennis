describe('Main Controller', function () {

    var gameService;
    var gamesObj = [
        {
            opponentName: 'NoName1',
            playerScore: 11,
            opponentScore: 21,
            time: new Date()
        },
        {
            opponentName: 'NoName2',
            playerScore: 21,
            opponentScore: 13,
            time: new Date()
        },
        {
            opponentName: 'NoName1',
            playerScore: 14,
            opponentScore: 21,
            time: new Date()
        },
        {
            opponentName: 'NoName3',
            playerScore: 21,
            opponentScore: 13,
            time: new Date()
        },
        {
            opponentName: 'NoName2',
            playerScore: 0,
            opponentScore: 11,
            time: new Date()
        }
    ];

    beforeEach(module("app"));

    var ctrl;

    beforeEach(function () {
        gameService = {
            games: gamesObj,
            addGame: function() {}
        };

        inject(function ($controller) {
            ctrl = $controller("MainController", {
                GameService: gameService
            });
        });
    });

    it('return correct winner', function() {
        expect(ctrl.isWin(ctrl.games[1])).toBeTruthy();
    });
});