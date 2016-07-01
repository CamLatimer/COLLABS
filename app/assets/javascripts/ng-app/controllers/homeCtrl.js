angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {

				$scope.keywords;
				$scope.artists;
				$scope.affiliates;

				// searches through all artists and bring back individual objects with info
				$scope.search = function(){
					$scope.affiliates = [];
					$http.get('/artists', {params: {search: $scope.keywords}}).then(
						function(res){
						$scope.artists = res.data;
					},
					function(error){
						console.log(error);
					});
				}

				// searches through artists and bring back the affiliates for a given artist
				$scope.getAff = function(id, index){
					$http.get('artist_aff/' + id).then(
						function(res){
							$scope.affiliates = res.data;
							console.log($scope.affiliates);
						},
						function(error){
							console.log(error);
						})
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
