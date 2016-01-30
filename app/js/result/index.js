class ResultController {
    constructor(GameService) {
        this.games = GameService.games;

        this.viewby = 20;
        this.totalItems = this.games.length;
        this.currentPage = 1;
        this.itemsPerPage = this.viewby;
    }

    setPage(pageNo) {
        this.currentPage = pageNo;
    };

    pageChanged() {
        console.log('Page changed to: ' + this.currentPage);
    };

    setItemsPerPage(num) {
        this.itemsPerPage = num;
        this.currentPage = 1; //reset to first paghe
    }
}

export default ResultController;
