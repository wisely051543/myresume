'use strict';

var app = angular.module('myresume', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'myresume.Services',
    'myresume.Factory',
    'myresume.ListCtrl',
    'myresume.DetailCtrl'
]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('main', {
        abstract: true,
        templateUrl: 'views/main.html',
    })

    .state('list', {
        parent: 'main',
        url: '/list',
        views: {
            '': {
                templateUrl: 'partials/partial-list.html',
                controller: 'ListCtrl'
            },
            'item@list': {
                templateUrl: 'partials/partial-item.html',
            }
        }
    })

    .state('detail', {
        parent: 'main',
        url: '/detail/:Id',
        templateUrl: 'partials/partial-detail.html',
        controller: 'DetailCtrl'
    })

    $urlRouterProvider.otherwise('/list');
});