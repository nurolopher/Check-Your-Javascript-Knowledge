'use strict';

/**
 * @ngdoc directive
 * @name questionsApp.directive:code
 * @description
 * # code
 */
angular.module('questionsApp')
  .directive('code', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        if (scope.$last) {
          $timeout(function () {
            $('pre code').each(function (i, block) {
              hljs.highlightBlock(block);
            });
          });
        }
      }
    };
  }]);
