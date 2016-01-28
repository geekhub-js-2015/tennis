class GameService {
    constructor() {
        this.load();
    }

    addGame(name1, name2, score1, score2) {
        this.games.push({
            name1, name2, score1, score2, time: new Date()
        });
        this.save();
    }

    clear() {
        this.games = [{
            name1: 'Fred',
            name2: 'Sasha',
            score1: 10,
            score2: 21,
            time: new Date(2015, 9, 1)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 21,
            score2: 5,
            time: new Date(2015, 9, 2)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 9, 13)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 10, 15)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 10, 18)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 10, 24)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 11, 1)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 11, 7)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 11, 15)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 11, 18)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 11, 24)
        }, {
            name1: 'Fred',
            name2: 'Sasha',
            score1: 14,
            score2: 21,
            time: new Date(2015, 12, 3)
        }, {
            name1: 'Masha',
            name2: 'Sasha',
            score1: 21,
            score2: 5,
            time: new Date(2015, 12, 7)
        }, {
            name1: 'Masha',
            name2: 'Sasha',
            score1: 21,
            score2: 5,
            time: new Date(2015, 12, 17)
        }, {
            name1: 'Masha',
            name2: 'Sasha',
            score1: 21,
            score2: 5,
            time: new Date(2015, 12, 23)
        }, {
            name1: 'Masha',
            name2: 'Sasha',
            score1: 21,
            score2: 5,
            time: new Date(2015, 12, 25)
        }];
    }

    save() {
        localStorage.games = JSON.stringify(this.games);
    }

    load() {
        try {
            this.games = JSON.parse(localStorage.games);
        } catch(e) {}

        if (!this.games) {
            this.clear();
        }
    }
}

export default GameService;
