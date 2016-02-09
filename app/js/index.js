import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';

import MainController from './main/index';
import AddController from './add/index';
import ProfileController from './profile/profileController';
import EditController from './edit/editController';

import GameService from './games/index';

import mainTemplate from './../js/main/mainView.html';
import addTemplate from './../js/add/addView.html';
import profileTemplate from './../js/profile/profileView.html';
import editTemplate from './../js/edit/editView.html';

import result from './main/result';

angular.module('app', [angularUiRouter, angularUiBootstrap])
    .controller('MainController', MainController)
    .controller('AddController', AddController)
    .controller('ProfileController', ProfileController)
    .controller('EditController', EditController)

    .service('GameService', GameService)

    .directive('result', result)

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                template: mainTemplate,
                controller: 'MainController as main'
            })
            .state('start', {
                url: "/add",
                template: addTemplate,
                controller: 'AddController as add'
            })
            .state('profile', {
                url: "/user/:name",
                template: profileTemplate,
                controller: 'ProfileController as user'
            })
            .state('edit', {
                url: "/edit/:index",
                template: editTemplate,
                controller: 'EditController as edit'
            });
    });
