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
        expect(gameService.games.length).toEqual(3);
    });

    it("Adds a game", function() {
        spyOn(gameService, 'save');

        gameService.addGame('Fred', 'Sasha', 21, 20);

        expect(gameService.save).toHaveBeenCalled();
        expect(gameService.games.length).toEqual(4);
        var game = gameService.games[gameService.games.length - 1];
        expect(game.name1).toEqual('Fred');
        expect(game.name2).toEqual('Sasha');
        expect(game.score1).toEqual(21);
    });

    it('Saves games in localStorage', function() {
        localStorage.clear();

        gameService.save();

        expect(localStorage.games).toBeTruthy();
    });

    it('Loads games in localStorage', function() {
        localStorage.clear();
        localStorage.games = JSON.stringify([{
            name1: 'Fred',
            name2: 'Sasha',
            score1: 10,
            score2: 21,
            time: new Date()
        }]);

        gameService.load();

        expect(gameService.games).toBeTruthy();
    });
});
