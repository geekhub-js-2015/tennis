class ProfileController {
    constructor(GameService, $stateParams) {
        this.userName = $stateParams.name;
        this.games = this.filterUserGame(GameService);
        this.wins = this.games.reduce(function(wins, game){
            return game.score1 > game.score2 ? ++wins : wins;
        },0);
        this.draw = this.games.reduce(function(draw, game){
            return game.score1 == game.score2 ? ++draw : draw;
        },0);

    }

    filterUserGame(GameService) {
        return GameService.games
            .filter( (el) => {
                return el.name1 === this.userName || el.name2 === this.userName;
            }).map( (el) => {
                if( el.name1 !== this.userName ){
                    let tmp = el.name2;
                    el.name2 = el.name1;
                    el.name1 = tmp;
                    tmp = el.score2;
                    el.score2 = el.score1;
                    el.score1 = tmp;
                }
                return el;
            });
    }

}

export default ProfileController;
