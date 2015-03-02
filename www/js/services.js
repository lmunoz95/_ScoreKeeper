angular.module('starter.services', ['starter.sqlService'])

.factory('GameTypes', function($cordovaSQLite,DB) {
    // Might use a resource here that returns a JSON array

    return {
        getAll : function() {
            var query = "SELECT FROM game_type";
            return DB.query(query);

        },
        getById : function(gameTyID) {


        },
        create : function(data) {
            var query = "INSERT INTO game_type (name,subject) VALUES (?,?)";
            console.log ("Data for create ROW " + data.name +" "+ data.subject);
            return DB.query(query,[data.name, data.subject]);

        }
    }
})

.factory('Teams', function($cordovaSQLite,DB) {
    // Might use a resource here that returns a JSON array

    return {
        getAll : function() {
            var query = "SELECT FROM team";
            return DB.query(query);

        },
        getById : function(gameTyID) {


        },
        create : function(data) {
            var query = "INSERT INTO team (name,subject) VALUES (?,?)";
            console.log ("Data for create ROW " + data.name +" "+ data.subject);
            return DB.query(query,[data.name, data.subject]);

        }
    }
})


.factory('Entries', function($cordovaSQLite) {
    // Might use a resource here that returns a JSON array

    return {
        getAll : function() {
            return chats;
        },
        getById : function(gameTyID) {
            chats.splice(chats.indexOf(chat), 1);
        },
        create : function(data) {

        }
    }
});


