class ResultController {
    //attention! this controller is poor. has bad practices and logic. but still works. need deep refactoring
    constructor(GameService, $filter, moment) {

        this.moment = moment;

        this.filter = $filter;
        this.games = GameService.games;

        this.displayGames = this.getAllGames();

        this.viewby = 20;
        this.totalItems = this.displayGames.length;
        this.currentPage = 1;
        this.itemsPerPage = this.viewby;

        this.uniqueNamesOpponent = $filter('unique')(this.games, "opponentName");
        this.selectedOpponentName = null;

        this.date = {
            dateFrom: null,
            dateTo: null
        };

        this.chart = this.getChartData();

    }

    getChartData() {
        return {
            labels: this.getDates(),
            series: ['You', 'Opponent'],
            data: [
                this.getWins(),
                this.getLoses()
            ]
        }
    }

    getDates() {
        var arr = [];
        var moment = this.moment;
        this.displayGames.forEach(function (item) {
            arr.push(moment(item.time).format("DD.MM.YYYY"));
        });

        return arr;
    }


    getWins() {
        var arr = [];
        this.displayGames.forEach(function (item, i, items) {
            arr.push(item.playerScore);
        });

        return arr;
    }

    getLoses() {
        var arr = [];
        this.displayGames.forEach(function (item, i, items) {
            arr.push(item.opponentScore);
        });

        return arr;
    }


    clearDate() {
        this.date = {
            dateFrom: null,
            dateTo: null
        }
    }

    updateByDate() {

        this.orderByName();

        var gamesByDate = this.displayGames.filter(function (game) {
            let gameTo = this.moment(this.date.dateTo).add(1, 'd');
            let gameTime = this.moment(game.time);
            let gameFrom = this.moment(this.date.dateFrom);

            return gameTime.isAfter(gameFrom) && gameTime.isBefore(gameTo);
        }, this);

        this.displayGames = gamesByDate;
        this.clearDate();
        this.refreshChartData();

    }

    orderByName() {
        if (this.selectedOpponentName) {
            this.displayGames = this.filter('reverse')(
                this.filter("filter")(this.games, {opponentName: this.selectedOpponentName}, true)
            );
        } else {
            this.displayGames = this.getAllGames();
        }
        this.refreshDisplayGamesLength();
        this.refreshChartData();
    }

    refreshChartData() {
        this.chart = this.getChartData();
    }

    getAllGames() {
        return this.filter('reverse')(this.games);
    }

    refreshDisplayGamesLength() {
        this.totalItems = this.displayGames.length;
    }

    setPage(pageNo) {
        this.currentPage = pageNo;
    };

    pageChanged() {
        console.log('Page changed to: ' + this.currentPage);
    };
}

export default ResultController;
