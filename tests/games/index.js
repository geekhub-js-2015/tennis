describe("Game Service", function () {

    beforeEach(module("app"));

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
        }
    ];

    beforeEach(function() {
        inject(function (GameService) {
            gameService = GameService;
            gameService.games = gamesObj;
        });
    });

    it('should contain result games', function() {
        expect(gameService.games.length).toEqual(2);
    });


    it('returns the correct percent of win and lose games', function() {
        expect(gameService.getWinPercent()).toEqual(50);
        expect(gameService.getLosePercent()).toEqual(50);
    });

    it("should add the game result", function() {

        gameService.addGame('NoName3', 21, 20, new Date());

        expect(gameService.games.length).toEqual(3);
        var game = gameService.games[gameService.games.length - 1];

        expect(game.opponentName).toEqual('NoName3');
        expect(game.playerScore).toEqual(21);
        expect(game.opponentScore).toEqual(20);

    });
});