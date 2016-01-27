import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularMoment from 'angular-moment';

import MainController from './main/index';
import StartController from './start/index';

import GameService from './games/index';

import mainTemplate from './../partials/main/index.html';
import startTemplate from './../partials/start/index.html';

angular.module('app', [angularUiRouter, angularUIBootstrap, angularAnimate, angularMoment])
    .controller('MainController', MainController)
    .controller('StartController', StartController)
    .service('GameService', GameService)
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                template: mainTemplate,
                controller: 'MainController as main'
            })
            .state('start', {
                url: "/start",
                template: startTemplate,
                controller: 'StartController as start'
            });
    });
