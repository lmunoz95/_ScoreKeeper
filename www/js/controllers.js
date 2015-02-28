angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})

.controller('GameCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})


.controller('TeamCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})


.controller('EntryCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
