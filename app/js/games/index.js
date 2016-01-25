class GameService {
    constructor() {
        this.load();
    }

    addGame(name1, name2, score1, score2) {
        this.games.push({
            name1, name2, score1, score2, time: new Date()
        });
	    localStorage.setItem('games', angular.toJson(this.games));
	    // "$$hashKey":"object:13" - ?
    }

    clear() {
	    this.users = JSON.parse(localStorage.getItem('users')) || [];
	    this.games = JSON.parse(localStorage.getItem('games')) || [];
    }

    /*save() {
        localStorage.games = JSON.stringify(this.games);
    }

    load() {
        try {
            this.games = JSON.parse(localStorage.games);
        } catch(e) {}

        if (!this.games) {
            this.clear();
        }
    }*/

	saveUserName(name) {
		if (this.users.indexOf(name) == -1) {
			this.users.push(name);
			localStorage.setItem('users', JSON.stringify(this.users));
		}
	}

}

export default GameService;
