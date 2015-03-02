angular.module('starter.controllers', ['starter.sqlService'])

.controller('MainCtrl', function ($scope, $cordovaSQLite) {})

.controller('GameCtrl', function ($scope, $cordovaSQLite, GameTypes) {

    $scope.game = {
        name: '',
        subject: ''
    };

    $scope.saveTypeGame = function () {

        if ($scope.game.name == '' || $scope.game.subject == '') {
            alert("Complete the form");
            return;
        }

        GameTypes.create($scope.game).then(function (result) {
            console.log("DONE");
            console.log(result.insertId);
        }, function (error) {

            alert("fail");
        });
    };

    $scope.cancelTypeGame = function () {

    };

})


.controller('TeamCtrl', function ($scope, Teams) {
    $scope.game = {
        name: '',
        subject: ''
    };

    $scope.saveTypeGame = function () {

        if ($scope.game.name == '' || $scope.game.subject == '') {
            alert("Complete the form");
            return;
        }

        Teams.create($scope.game).then(function (result) {
            console.log("DONE");
            console.log(result.insertId);
        }, function (error) {

            alert("fail");
        });
    };

    $scope.cancelTypeGame = function () {

    };

})


.controller('EntryCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});