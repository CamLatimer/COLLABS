"use strict";
(function(){
  angular.module('affApp')
	.controller('MapCtrl', [
		'$scope',
		function ($scope) {
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
})();
