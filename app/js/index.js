import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';

import MainController from './main/index';
import StartController from './start/index';
import UserController  from './user/index';

import GameService from './games/index';

import mainTemplate from './../partials/main/index.html';
import startTemplate from './../partials/start/index.html';
import userTemplate from './../partials/user/index.html';

import result from './main/result';

angular.module('app', [angularUiRouter, angularUiBootstrap])
    .controller('MainController', MainController)
    .controller('StartController', StartController)
    .controller('UserController', UserController)
    .service('GameService', GameService)
    .filter('groupByName', function() {
        return function(obj) {
            return obj.reduce();
        }
    })


    .directive('result', result)

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                template: mainTemplate,
                controller: 'MainController as main'
            })
            .state('user', {
                url: "/users/{name}",
                template: userTemplate,
                controller: 'UserController as user'
            })
            .state('start', {
                url: "/start",
                template: startTemplate,
                controller: 'StartController as start'
            });
    });
