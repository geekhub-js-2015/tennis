class GameService {
    constructor() {
        this.load();
    }

    addGame(name1, name2, score1, score2, date) {
        this.games.push({
            name1, name2, score1, score2, time: date || new Date()
        });
        this.save();
    }

    clear() {
        this.games = [{
            name1: 'Fred',
            name2: 'Sasha',
            score1: 10,
            score2: 21,
            time: new Date()
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 10,
            score2: 5,
            time: new Date()
        }, {
            name1: 'Masha',
            name2: 'Sasha',
            score1: 21,
            score2: 5,
            time: new Date()
        }];
    }

    save() {
        localStorage.games = angular.toJson(this.games);
    }

    load() {
        try {
            this.games = angular.fromJson(localStorage.games);
        } catch(e) {}

        if (!this.games) {
            this.clear();
        }
    }
}

export default GameService;
