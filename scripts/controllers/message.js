'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, messageService) {
    $scope.messages = [];
  
	messageService.getMessage().then(function(response) {
  		console.log(response);
  		$scope.messages = response.data.message;
	});
  });

  
