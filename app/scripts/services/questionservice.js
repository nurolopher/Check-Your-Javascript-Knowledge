'use strict';

/**
 * @ngdoc service
 * @name questionsApp.questionService
 * @description
 * # questionService
 * Factory in the questionsApp.
 */
angular.module('questionsApp')
  .factory('questionService', ['$http', function ($http) {

    // Public API here
    return {
      get: function () {
        return $http.get('scripts/data/questions.js');
      }
    };
  }]);
