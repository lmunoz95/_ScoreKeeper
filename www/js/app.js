// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var db = null;

angular.module('starter', ['ionic',
                           'starter.sqlService',
                           'starter.controllers',
                           'starter.services',
                           'ngCordova',
                           'starter.database'])

.run(function ($ionicPlatform, $cordovaSQLite, DB) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        //$cordovaSQLite.deleteDB(dbConfig.name);
        DB.init();

    });
})


.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.main', {
        url: '/main',
        views: {
            'tab-main': {
                templateUrl: 'templates/tab-main.html',
                controller: 'MainCtrl'
            }
        }
    })

    .state('tab.game', {
        url: '/game',
        views: {
            'tab-game': {
                templateUrl: 'templates/tab-game.html',
                controller: 'GameCtrl'
            }
        }
    })

    .state('tab.team', {
        url: '/team',
        views: {
            'tab-team': {
                templateUrl: 'templates/tab-team.html',
                controller: 'TeamCtrl'
            }
        }
    })


    .state('tab.entry', {
        url: '/entry',
        views: {
            'tab-entry': {
                templateUrl: 'templates/tab-entry.html',
                controller: 'EntryCtrl'
            }
        }
    })

    .state('scoreBoard', {
        url: '#/scoreboard/:entryId',
        templateUrl: 'templates/score-board.html',
        controller: 'ScoreBoardCtrl'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/main');

});