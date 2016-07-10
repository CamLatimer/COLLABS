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
    }
	]);
})();
