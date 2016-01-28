class PaginationController {
    constructor(GameService) {
        console.log(GameService);
        this.currentPage = 0;
        this.itemsPerPage = 5;
        this.items = [];
        this.items = GameService.games;
    }

    firstPage() {
        return this.currentPage === 0;
    }
    lastPage() {
        var lastPageNum = Math.ceil(this.items.length / this.itemsPerPage - 1);
        return this.currentPage === lastPageNum;
    }
    numberOfPages() {
        return Math.ceil(this.items.length / this.itemsPerPage);
    }
    startingItem() {
        return this.currentPage * this.itemsPerPage;
    }
    pageBack() {
        this.currentPage = this.currentPage - 1;
    }
    pageForward() {
        this.currentPage = this.currentPage + 1;
    }

}

export default PaginationController;
