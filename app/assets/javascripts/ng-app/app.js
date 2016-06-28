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
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });

  		// default fallback route
  		$urlRouterProvider.otherwise('/');

  	});
  })();
