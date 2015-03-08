angular.module('starter.controllers', ['starter.sqlService'])

.controller('MainCtrl', function ($scope, $cordovaSQLite) {

    $scope.name = 'Hola';

})

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
            alert("You game type was created successfully ");

        }, function (error) {
            alert("can't create the game type, try again ");
            console.log("fail");
        });
    };

    $scope.cancelTypeGame = function () {
        $scope.game.name = "";
        $scope.game.subject = "";
    };

})


.controller('TeamCtrl', function ($scope, Teams) {
    $scope.team = {
        name: '',
        subject: ''
    };

    $scope.saveTeam = function () {

        if ($scope.team.name == '' || $scope.team.subject == '') {
            alert("Complete the form");
            return;
        }

        Teams.create($scope.team).then(function (result) {
            alert("DONE");
            alert("You team was created successfully ");
        }, function (error) {

            alert("fail");
        });
    };

    $scope.cancelTeam = function () {
        $scope.team.name = "";
        $scope.team.subject = "";
    };

})


.controller('EntryCtrl', function ($scope, $state, Teams, GameTypes, Entries) {


    $scope.FirstTeams = [];
    $scope.SecondTeams = [];
    $scope.GameTypes = [];

    $scope.entry = {
        firstTeam: '',
        secondTeam: '',
        gameType: ''

    }


    $scope.updateFirstTeams = function () {

        Teams.getAll().then(function (result) {
            $scope.FirstTeams = [];

            for (var i = 0; i < result.rows.length; i++) {
                var source = {
                    id: result.rows.item(i).id,
                    name: result.rows.item(i).name,
                    subject: result.rows.item(i).subject
                };

                $scope.FirstTeams.push(source);
            }


        });

    }

    $scope.updateSecondTeams = function () {
        Teams.getAll().then(function (result) {
            $scope.SecondTeams = [];


            for (var i = 0; i < result.rows.length; i++) {
                var source = {
                    id: result.rows.item(i).id,
                    name: result.rows.item(i).name,
                    subject: result.rows.item(i).subject
                };

                $scope.SecondTeams.push(source);
            }

        });


    }

    $scope.updateGameTypes = function () {

        GameTypes.getAll().then(function (result) {
            $scope.GameTypes = [];


            for (var i = 0; i < result.rows.length; i++) {

                var source = {
                    id: result.rows.item(i).id,
                    name: result.rows.item(i).name,
                    subject: result.rows.item(i).subject
                };


                $scope.GameTypes.push(source);
            }

        });
    }

    $scope.updateFirstTeams();
    $scope.updateSecondTeams();
    $scope.updateGameTypes();





    $scope.startGame = function () {

        if ($scope.entry.firstTeam == '' || $scope.entry.secondTeam == '' || $scope.entry.gameType == '') {
            alert("Complete the form");
            return;
        }

        var source = [
            $scope.entry.firstTeam.id,
            $scope.entry.secondTeam.id,
            $scope.entry.gameType.id,
            0,
            0,
            false
        ]

        Entries.create(source).then(function (result) {
            debugger;
            //alert("Done ");
            $state.go('scoreBoard',{entryId:result.insertId});

        }, function (error) {
            alert("fail");
        });

    }




})

.controller('ScoreBoardCtrl', function ($scope, $cordovaSQLite, $stateParams) {

    debugger;
    $scope.scoreFirstTeam = 0;
    $scope.scoreSecondTeam = 0;

    $scope.points = {
        firstTeam : 0,
        secondTeam: 0
    }

    $scope.addPointFirstTeam = function(){

        $scope.scoreFirstTeam = $scope.scoreFirstTeam + $scope.points.firstTeam;
    }

    $scope.subPointFirstTeam = function(){

        $scope.scoreFirstTeam = $scope.scoreFirstTeam - $scope.points.firstTeam;
    }
    
    $scope.addPointSecondTeam = function(){

        $scope.scoreSecondTeam = $scope.scoreSecondTeam + $scope.points.secondTeam;
    }
    
    $scope.subPointSecondTeam = function(){

        $scope.scoreSecondTeam = $scope.scoreSecondTeam - $scope.points.secondTeam;
    }








});