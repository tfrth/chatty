'use strict';

var app = angular.module('chattyApp');
  
app.service('messageService', function($http) {
   	this.getMessage = function() {
   		return $http({
   			method: 'GET',
   			url: 'http://localhost:8666'
   		})
   	}
});




