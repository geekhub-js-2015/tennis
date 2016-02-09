import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularMoment from 'angular-moment';

import MainController from './main/index';
import StartController from './start/index';
import ResultController from './result/index';

import GameService from './games/index';

import mainTemplate from './../partials/main/index.html';
import startTemplate from './../partials/start/index.html';
import resultTemplate from './../partials/result/index.html'

angular.module('app', [angularUiRouter, angularUIBootstrap, angularAnimate, angularMoment, 'chart.js'])
    .controller('MainController', MainController)
    .controller('StartController', StartController)
    .controller('ResultController', ResultController)
    .service('GameService', GameService)
    .filter('orderByDate', function () {
        return function (value, desc) {
            if (angular.isArray(value)) {
                if (desc) {
                    return value.sort(function (a, b) {
                        return a.time + b.time;
                    });
                } else {
                    return value.sort(function (a, b) {
                        return a.time - b.time;
                    });
                }

            }
        }
    })
    .filter('unique', function () {

        return function (items, filterOn) {

            if (filterOn === false) {
                return items;
            }

            if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
                var hashCheck = {}, newItems = [];

                var extractValueToCompare = function (item) {
                    if (angular.isObject(item) && angular.isString(filterOn)) {
                        return item[filterOn];
                    } else {
                        return item;
                    }
                };

                angular.forEach(items, function (item) {
                    var valueToCheck, isDuplicate = false;

                    for (var i = 0; i < newItems.length; i++) {
                        if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                            isDuplicate = true;
                            break;
                        }
                    }
                    if (!isDuplicate) {
                        newItems.push(item);
                    }

                });
                items = newItems;
            }
            return items;
        };
    })
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
                url: "/start",
                template: startTemplate,
                controller: 'StartController as start'
            })
            .state('result', {
                url: "/result",
                template: resultTemplate,
                controller: 'ResultController as result'
            });
    });
