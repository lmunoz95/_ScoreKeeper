angular.module('starter.sqlService', [])
// DB service
.factory('DB', function($q, $cordovaSQLite) {
    var self = this;
    self.db = null;

    self.init = function() {
        // DB init from config.js
        $cordovaSQLite.deleteDB(dbConfig.name);
        
        self.db = $cordovaSQLite.openDB({name: dbConfig.name}) 
        angular.forEach(dbConfig.tables, function(table) {
            var columns = [];
            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });
            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            console.log('Table created : ' + table.name);
            self.query(query);
        });
    };

    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        return $cordovaSQLite.execute(self.db,query,bindings);
    };

    return self;
});