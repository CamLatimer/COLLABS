"use strict";

(function(){

  angular
  	.module('affApp', [
  		'ngAnimate',
  		'ui.router',
  		'templates',
      'uiGmapgoogle-maps'
  	])
  	.config(function ($stateProvider, $urlRouterProvider, $locationProvider,uiGmapGoogleMapApiProvider) {

  		$stateProvider
  			.state('home', {
  				url: '/',
  				templateUrl: 'home.html',
  				controller: 'HomeCtrl'
  			});

        uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyD3ZEPn9qk30GUFswo1z_IfIwFIqlHYPcc',
        libraries: 'weather,geometry,visualization'
    });

  		// default fallback route
  		$urlRouterProvider.otherwise('/');

  	});
  })();
