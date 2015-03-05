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


.controller('EntryCtrl', function ($scope, Teams, GameTypes) {
    $scope.firstTeam = '';
    $scope.secondTeam = '';
    $scope.gameTypeameType = '';

    $scope.FirstTeams = [];
    $scope.SecondTeams = [];
    $scope.GameTypes = [];


    $scope.updateFirstTeams = function (){
        Teams.getAll().then(function (result) {
            $scope.FirstTeams = [];

            for (var i = 0; i < result.rows.length; i++) {
                var source = {
                    id:result.rows.item(i).id,
                    name : result.rows.item(i).name,
                    subject: result.rows.item(i).subject
                };

                $scope.FirstTeams.push(source);
            }
        });

    }

    $scope.updateSecondTeams = function (){
        Teams.getAll().then(function (result) {
            $scope.SecondTeams = [];


            for (var i = 0; i < result.rows.length; i++) {
                var source = {
                    id:result.rows.item(i).id,
                    name : result.rows.item(i).name,
                    subject: result.rows.item(i).subject
                };

                $scope.SecondTeams.push(source);
            }
        });


    }

    $scope.updateGameTypes = function (){

        GameTypes.getAll().then(function (result) {
            $scope.GameTypes = [];


            for (var i = 0; i < result.rows.length; i++) {

                var source = {
                    id:result.rows.item(i).id,
                    name : result.rows.item(i).name,
                    subject: result.rows.item(i).subject
                };


                $scope.GameTypes.push(source);
            }
        });
    }
 var teamm = $scope.firstTeam.name;

    $scope.updateFirstTeams();
    $scope.updateSecondTeams();
    $scope.updateGameTypes();

    $scope.startGame = function(){
        
        alert(angular.isDefined($scope.firstTeam.name));
        alert(angular.isDefined($scope.firstTeam.name));
        alert(teamm);

        /*
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);
        console.log("Aqui esta el valor " + $scope.FirstTeam);*/

    }




});