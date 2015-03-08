angular.module('starter.sqlService', [])
// DB service
.factory('DB', function($q, $cordovaSQLite, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {
        // DB init from config.js
        try {
            self.db = $cordovaSQLite.openDB({ name: DB_CONFIG.name });
        } catch(err) {
            self.db = openDatabase(DB_CONFIG.name, '1.0', 'database', 1);
        }
        
        //this.db = $cordovaSQLite.openDB(DB_CONFIG.name);
        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];
            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });
            var query = 'CREATE TABLE ' + table.name + ' (' + columns.join(',') + ')';
            console.log('Table created : ' + table.name);
            self.query(query);
        });
    };

    self.query = function(query, bindings) {
        bindings = (typeof bindings !== 'undefined') ? bindings : [];
        var deferred = $q.defer();

        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });
 
        return deferred.promise;
    };

    return self;
});