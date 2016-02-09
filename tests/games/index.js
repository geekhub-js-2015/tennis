describe("Game Service", function () {

    beforeEach(module("app"));

    var gameService;

    beforeEach(function() {
        inject(function (GameService) {
            gameService = GameService;
            spyOn(gameService, 'load').and.callFake(function() {
                gameService.clear();
            });
            gameService.load();
        });
    });

    it('Starts with some games', function() {
        expect(gameService.games.length).toEqual(16);
    });

    it("Adds a game", function() {
        spyOn(gameService, 'save');

        gameService.addGame('Fred', 'Sasha', 21, 20);

        expect(gameService.save).toHaveBeenCalled();
        expect(gameService.games.length).toEqual(17);
        var game = gameService.games[gameService.games.length - 1];
        expect(game.name1).toEqual('Fred');
        expect(game.name2).toEqual('Sasha');
        expect(game.score1).toEqual(21);
        expect(game.score2).toEqual(20);
    });

    it("Edit a game", function() {
        spyOn(gameService, 'save');

        gameService.addGame('Fred', 'Sasha', 21, 20);

        expect(gameService.save).toHaveBeenCalled();
        expect(gameService.games.length).toEqual(17);
        var game = gameService.games[gameService.games.length - 1];
        expect(game.name1).toEqual('Fred');
        expect(game.name2).toEqual('Sasha');
        expect(game.score1).toEqual(21);
        expect(game.score2).toEqual(20);
    });
});
