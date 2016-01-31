describe('Start Controller', function () {

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
            ctrl = $controller("StartController", {
                GameService: gameService
            });
        });
    });

    it('should contain all opponents without duplicate', function() {
        expect(ctrl.getAllOpponentName().length).toEqual(3);
    });

    it('It saves a game', function() {
        ctrl.opponentName = 'NoName';
        ctrl.opponentScore = 10;
        ctrl.playerScore = 21;

        spyOn(gameService, 'addGame');

        ctrl.save();

        expect(gameService.addGame).toHaveBeenCalledWith('NoName', 10, 21);
    });
});