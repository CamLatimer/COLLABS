angular.module('affApp')
	.controller('HomeCtrl', [
		'$scope',
		'$http',
		function ($scope, $http) {
				$scope.hello = 'go',
				$scope.keywords;
				$http.get('/artists', {params: {search: 'f'}}).then(
					function(res){
					console.log(res);
					}
					function(error){
						console.log(error);
					});
				$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 3 };
				$scope.options = {
					styles: [
								    // {
								    //     "stylers": [
								    //         {
								    //             "hue": "#007fff"
								    //         },
								    //         {
								    //             "saturation": 0
								    //         }
								    //     ]
								    // },
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
								                "visibility": "on"
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
