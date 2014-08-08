'use strict';

/**
 * @ngdoc function
 * @name myresume.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the project detail page
 */

var app = angular.module('myresume.DetailCtrl', ['ngSanitize']);

app.controller('DetailCtrl', ['$scope', '$stateParams', 'Factory',

    function($scope, $stateParams, Factory) {
        var id = $stateParams.Id,
            project;

        Factory.getProjects().then(function(data) {

            data.forEach(function(el) {
                if (el['id'] == id) {
                    project = el;
                }
            });

            $scope.project = project;
            $scope.html = project.html;
            $scope.tags = project.tags.split(',');
        });
    }
]);