'use strict';

/**
 * @ngdoc function
 * @name myresume.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the project list page
 */

var app = angular.module('myresume.ListCtrl', []);

app.controller('ListCtrl', ['$scope', 'Factory',

    function($scope, Factory) {

        Factory.getProjects().then(function(data) {
            $scope.projects = data;
        });
    }
]);