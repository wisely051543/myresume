'use strict';

/**
 * @ngdoc service
 * @name myresume.factory:service
 * @description
 * # Project
 * Handle scenes to get all projects.
 */


var http = angular.module('myresume.Services', ['ngResource']);

http.factory('Project', function($resource, $state) {

    var source = $resource('../data/data.json', {}, {
        'query': {
            method: 'GET',
            isArray: true
        }
    });

    return {
        'getProjects': function() {
            var res = handleReq(source.query(), $state);

            return res;
        }
    };
});

/**
 * Handle HTTP asynchronous action
 * @param  {function} action [RESTful connectors]
 * @return {Object}          [Return value of the called handler]
 */
function handleReq(action, state) {
    var promise = action.$promise.then(function(data) {
        return data;
    }, function(err) {
        console.log(err);
    })

    return promise;
}