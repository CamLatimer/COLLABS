angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {
				$scope.hello = 'go',
				$http.get('/artists.json').then(function(res){
					console.log(res);
				})
		}
	]);
