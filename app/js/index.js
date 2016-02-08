import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

import MainController from './main/index';
import AddController from './add/index';
import ProfileController from './profile/profileController';
import EditController from './edit/editController';

import PaginationController from './pagination/paginationController';

import GameService from './games/index';

import mainTemplate from './../js/main/mainView.html';
import addTemplate from './../js/add/addView.html';
import profileTemplate from './../js/profile/profileView.html';
import editTemplate from './../js/edit/editView.html';

angular.module('app', [angularUiRouter])
    .controller('MainController', MainController)
    .controller('AddController', AddController)
    .controller('PaginationController', PaginationController)
    .controller('ProfileController', ProfileController)
    .controller('EditController', EditController)

    .service('GameService', GameService)
    .filter('groupByName', function() {
        return function(obj) {
            return obj.reduce();
        };
    })
    .filter('startFrom', function(){
        return function(input, start){
            start = +start;
            return input.slice(start);
        };
    })
    .filter('range', function() {
        return function(input, total) {
            total = parseInt(total);
            for (var i=0; i<total; i++) {
                input.push(i);
            }
            return input;
        };
    })

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
