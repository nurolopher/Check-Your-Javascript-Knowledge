'use strict';

/**
 * @ngdoc service
 * @name untitledApp.questionService
 * @description
 * # questionService
 * Factory in the untitledApp.
 */
angular.module('untitledApp')
  .factory('questionService', ['$http', function ($http) {

    // Public API here
    return {
      get: function () {
        return $http.get('scripts/data/questions.js');
      }
    };
  }]);
