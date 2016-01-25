'use strict';

/**
 * @ngdoc function
 * @name untitledApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the untitledApp
 */
angular.module('untitledApp')
  .controller('MainCtrl', ['$scope', 'questionService', function ($scope, questionService) {
    questionService.get().success(function (data) {
      $scope.questions = data;
    });

    $scope.showResults = function () {
      $scope.results = {correctNum: 0, incorrectNum: 0};
      angular.forEach($scope.questions, function (question) {
        if (question.answer == question.response) {
          $scope.results.correctNum++;
        } else {
          $scope.results.incorrectNum++;
        }
      });
      $scope.results.show = true;
    }
  }]);
