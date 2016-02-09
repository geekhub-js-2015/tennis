class ResultsController {
    constructor(GameService) {
        this.games = GameService.games;

        this.currentPage = 1;
        this.numPerPage = 20;
        this.filterStart = ((this.currentPage - 1) * this.numPerPage);
        this.filterEnd = this.filterStart + this.numPerPage;
        this.filter = this.games.slice(this.filterStart, this.filterEnd);

        this.previousPage = function () {
            this.currentPage -= 1;
            this.filterStart = ((this.currentPage - 1) * this.numPerPage);
            this.filterEnd = this.filterStart + this.numPerPage;
            this.filter = this.games.slice(this.filterStart, this.filterEnd);
        };
        this.nextPage = function () {
            this.currentPage += 1;
            this.filterStart = ((this.currentPage - 1) * this.numPerPage);
            this.filterEnd = this.filterStart + this.numPerPage;
            this.filter = this.games.slice(this.filterStart, this.filterEnd);

        };

        this.filter = this.games.slice(this.filterStart, this.filterEnd);

    }
}

export default ResultsController;