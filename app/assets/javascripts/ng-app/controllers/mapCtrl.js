"use strict";
(function(){
  angular.module('affApp')
	.controller('MapCtrl', [
		'$scope',
		function ($scope) {
      angular.extend($scope, {
        center: {
          lat: 20,
          lng: -60,
          zoom: 3
        },
				defaults: {
					scrollWheelZoom: false
				}
			})
      $scope.tiles = {
          url: "https://api.mapbox.com/styles/v1/camlatimer/ciqhdtipn000ochnk87s3o9mc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FtbGF0aW1lciIsImEiOiJjaXFoNHZ3eTEwNGwzZnJtMWkxaXEzdW51In0.lGGqoF18LQGfFiIoIY3J4A"
      }
    }

	]);
})();
