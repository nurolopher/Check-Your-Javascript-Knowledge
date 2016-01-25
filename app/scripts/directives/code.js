'use strict';

/**
 * @ngdoc directive
 * @name untitledApp.directive:code
 * @description
 * # code
 */
angular.module('untitledApp')
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
