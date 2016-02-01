class GameService {
    constructor() {
        this.load();
    }

    addGame(name1, name2, score1, score2) {
        this.games.push({
            name1, name2, score1, score2, time: new Date(), showInfo: false
        });
	    //localStorage.setItem('games', angular.toJson(this.games));
	    this.save();
	    //this.saveUserName(name2);
	    // "$$hashKey":"object:13" - ?
    }

    clear() {
	    this.users = JSON.parse(localStorage.getItem('users')) || [];
	    this.games = JSON.parse(localStorage.getItem('games')) || [];
    }

	setDefault() {
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
        localStorage.games = JSON.stringify(this.games);
    }

    load() {
        try {
            this.games = JSON.parse(localStorage.games);
            this.users = JSON.parse(localStorage.users);
        } catch(e) {}

        if (!this.games) {
            this.setDefault();
        }
    }

	saveUserName(name) {
		if (this.users.indexOf(name) == -1) {
			this.users.push(name);
			localStorage.setItem('users', JSON.stringify(this.users));
		}
	}

	getGamesByUser(name) {
		let userGames = [];

		if (this.games.length > 0) {
			this.games.forEach(function(el) {
				if ((name == el.name1) || (name == el.name2)) {
					userGames.push(el);
				}
			});
		}

		return userGames;
	}

	getCountGamesByUser(name) {
		return this.getGamesByUser(name).length;
	}

	getUserWinStat(name) {
		let totalCountUserGames = this.getCountGamesByUser(name),
			userGames = this.getGamesByUser(name),
			win = 0;

		if (userGames.length > 0) {
			userGames.forEach(function(el) {
				if (((name == el.name1) && (+el.score1 > +el.score2)) || ((name == el.name2) && (+el.score1 < +el.score2))) {
					win++;
				}
			});

			if (totalCountUserGames > 0) {
				return (win / totalCountUserGames) * 100;
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	}

}

export default GameService;
