'use strict';

/**
 * @ngdoc function
 * @name ylisalajaneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ylisalajaneApp
 */
angular.module('ylisalajaneApp')
  .controller('ChatCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .directive('ysChatBubble', function () {
    return {
      restrict: 'A',
      template: '<div>ysChatBubble</div>'
    };
  });
