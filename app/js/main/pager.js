import pagerTemplate from '../../partials/main/pager.html';

var pager = function() {
    return {
        restrict: 'E',
        template: pagerTemplate,
        scope: {
            itemsOnPage: '=',
            items: '=',
            pagedItems: '='
        },
        link: function(scope) {
            scope.$watchGroup(['itemsOnPage', 'items'], function() {
                scope.pages = [];
                for (var i = 0;i<(scope.items.length / scope.itemsOnPage);i++) {
                    scope.pages.push({
                        idx: i,
                        page: i + 1
                    });
                }

                scope.currentPage = 0;
            });

            scope.choosePage = function(idx) {
                scope.currentPage = idx;
            };

            scope.$watch('currentPage', function(page) {
                var start = page * scope.itemsOnPage;
                scope.pagedItems = scope.items.slice(start, start + scope.itemsOnPage);
            });
        }
    };
};

export default pager;
