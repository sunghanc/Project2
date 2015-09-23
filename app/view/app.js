/**
 * Created by raymond.cho on 18/09/2015.
 */
var app = angular.module('project2', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';
    }]);