'use strict';

/**
 * @ngdoc function
 * @name questionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the questionsApp
 */
angular.module('questionsApp')
  .controller('MainCtrl', ['$scope', 'questionService', function($scope, questionService) {
    questionService.get().success(function(data) {
      $scope.questions = data;
    });

    $scope.getResults = function() {
      $scope.showResults = true;
      $scope.results = {
        correctNum: 0,
        incorrectNum: 0,
        inPercentage: function() {
          return ((this.correctNum / (this.correctNum + this.incorrectNum)) * 100) .toFixed(2);
        }
      };
      angular.forEach($scope.questions, function(question) {
        if (question.answer == question.response) {
          $scope.results.correctNum++;
        } else {
          $scope.results.incorrectNum++;
        }
      });
      $scope.results.show = true;
    }
  }]);
