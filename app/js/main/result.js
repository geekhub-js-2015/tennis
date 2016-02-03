import resultTemplate from '../../partials/main/result.html';

var result = function($filter) {
    return {
        restrict: 'E',
        template: resultTemplate,
        scope: {
            game: '=',
            previousGame: '=',
            hideName: '='
        },
        link: function(scope) {
            scope.$watchGroup(['game', 'previousGame', 'hideName'], function(vals) {
                if (!vals[0] || !vals[1]) {
                    scope.hideTime = false;
                    scope.reallyHideName = vals[2];
                } else {
                    scope.hideTime = vals[0].name1 == vals[1].name1 &&
                        $filter('date')(vals[0].time, 'EEEE') === $filter('date')(vals[1].time, 'EEEE');
                    scope.reallyHideName = vals[2] || vals[0].name1 == vals[1].name1;
                }
            });
        }
    };
};

export default result;
