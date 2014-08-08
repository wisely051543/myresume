'use strict';

/**
 * @ngdoc factory
 * @name myresume.factory:factory
 * @description
 * # factory
 * Factory for Controller in the myresume app.
 */

var services = angular.module('myresume.Factory', []);

services.factory('Factory', ['Project',

    function(Project) {

        return {
            getProjects: function() {
                return Project.getProjects();
            }
        }
    }
]);