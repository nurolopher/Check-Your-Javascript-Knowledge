'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('questionsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    scope.questions = [
      {
        "id": 1,
        "code": "(function(){\n   return typeof arguments;\n})();",
        "versions": ["\"object\"", "\"array\"", "\"arguments\"", "\"undefined\""],
        "answer": "\"object\"",
        "response": "\"arguments\""
      }, {
        "id": 2,
        "code": "var s = 'Hello';\ntypeof s;",
        "versions": ["\"string\"", "\"object\"", "\"Object\"", "\"String\""],
        "answer": "\"string\"",
        "response": "\"string\""
      }];
  }));

  it('Questions length should be 2', function() {
    scope.showResults();
    expect(scope.questions.length).toBe(2);
  });

  it('correctNum should be 1', function() {
    scope.showResults();
    expect(scope.results.correctNum).toBe(1);
  });

  it('incorrectNum should be 1', function() {
    scope.showResults();
    expect(scope.results.incorrectNum).toBe(1);
  });
});
