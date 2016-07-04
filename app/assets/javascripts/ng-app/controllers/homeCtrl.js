"use strict";
(function(){
	angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {

				// scope variables
				$scope.keywords;
				$scope.artists;

				// searches through all artists and brings back individual objects with
				// // info and list of collaborators
				$scope.search = function(){
					$scope.affiliates = [];
					$http.get('/artists', {params: {search: $scope.keywords}}).then(
						function(res){
						$scope.artists = res.data;
						console.log(res.data);
					},
					function(error){
						console.log(error);
					});
				}

				// trigger ng-show to display the collaborators for each artist on click
				$scope.showCollabs = function(context){
					if(context.showing === true){
						context.showing = false;
					} else {
						context.showing = true;
					}
				}

		}
	]);
})();
