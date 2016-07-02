angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {

				$scope.keywords;
				$scope.artists;

				// searches through all artists and bring back individual objects with
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

				$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 3 };
				$scope.options = {
					styles: [
								    {
								        "featureType": "water",
								        "stylers": [
								            {
								                "color": "#000000"
								            }
								        ]
								    },
								    {
								        "featureType": "administrative.country",
								        "elementType": "labels",
								        "stylers": [
								            {
								                "visibility": "off"
								            }
								        ]
								    },
										{
								        "featureType": "landscape.natural",
								        "elementType": "all",
								        "stylers": [
								            {
								                "color": "#ffffff"
								            }
								        ]
								    },
										{
								        "featureType": "administrative.province",
								        "elementType": "labels",
								        "stylers": [
								            {
								                "visibility": "off"
								            }
								        ]
								    }
									]
				}
		}
	]);
