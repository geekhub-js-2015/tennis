import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';
import angularMoment from 'angular-moment';


import mainTemplate from '../partials/main/index.html';
import startTemplate from '../partials/start/index.html';
import resultsTemplate from '../partials/results/index.html';


import GameService from '../js/games/index';

import MainController from '../js/main/index';
import StartController from '../js/start/index';
import ResultsController from '../js/results/index';


angular.module('app', [angularUiRouter, angularUiBootstrap, angularMoment])
    .controller('MainController', MainController)
    .controller('StartController', StartController)
    .controller('ResultsController', ResultsController)
    .service('GameService', GameService)
    .filter('reverse', function () {
        return function (items) {
            return items.slice().reverse();
        };
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                template: mainTemplate,
                controller: 'MainController as main'
            })
            .state('start', {
                url: '/start',
                template: startTemplate,
                controller: 'StartController as start'
            })
            .state('results', {
                url: '/results',
                template: resultsTemplate,
                controller: 'ResultsController as result'
            })

    });