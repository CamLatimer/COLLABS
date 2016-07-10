"use strict";

(function(){

  angular
  	.module('affApp', [
  		'ngAnimate',
  		'ui.router',
  		'templates',
      'leaflet-directive'
  	])
  	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  		$stateProvider
  			.state('home', {
  				url: '/',
  				templateUrl: 'home.html',
  				controller: 'HomeCtrl'
  			});

  		// default fallback route
  		$urlRouterProvider.otherwise('/');

  	});
  })();
