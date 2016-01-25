import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

import MainController from './main/index';
import StartController from './start/index';

import GameService from './games/index';

import mainTemplate from './../partials/main/index.html';
import startTemplate from './../partials/start/index.html';

angular.module('app', [angularUiRouter])
    .controller('MainController', MainController)
    .controller('StartController', StartController)
    .service('GameService', GameService)
    .filter('groupByName', function() {
        return function(obj) {
            return obj.reduce();
        };
    })
	/*.directive('autoComplete', function($timeout) {
		return function(scope, iElement, iAttrs) {
			iElement.autocomplete({
				source: scope[iAttrs.uiItems],
				select: function() {
					$timeout(function() {
						iElement.trigger('input');
					}, 0);
				}
			});
		};
	})*/
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
