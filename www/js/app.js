// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('twitterController', function($scope, $ionicPopup, $timeout){
  $scope.tweets = [

    {textTweet : 'Testando essa bosta', date: '08/12/1991', like : false , retweet : ''},
    {textTweet : 'funcionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', date: '14/12/1992', like : false , retweet : ''},
    {textTweet : 'Espero que essa bosta funcione', date: '20/12/2013', like : false , retweet : ''}

  ];

  $scope.nome = {};

  $scope.addTwitter = function(){
    var data = new Date().toLocaleString();
    $scope.tweets.unshift({textTweet : $scope.tweetText, date : data, like: false, retweet : ''});
    $scope.tweetText = '';
  };

  $scope.removeTwitter = function(id){
    $scope.tweets.splice(id,1);
  };

  $scope.likeTwitter = function(id){
    $scope.tweets[id].like=!$scope.tweets[id].like;
  };

  $scope.retweetTwitter = function(id){
    var data = new Date().toLocaleString();
    novo = {textTweet : $scope.tweets[id].textTweet, date : data, like: false, retweet : 'Retweet: '};
    $scope.tweets.unshift(novo);
  };

  $scope.showName = function(){
    if ($scope.nome.length>0) {
      return ;
    } else{
      return 'true';
    }
    return alerta;

  };

  $scope.btnCurtir = function(id){

    if ($scope.tweets[id].like) {
      return 'true';
    } else{
      return 'false';
    }
  };
  
  
    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
      
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="text" minlenght="3" ng-model="nome.user">',
        title: 'Entre com o seu Usuário:',
        subTitle: '',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.nome.user) {
                //Não deixa salvar se não tiver preenchido o usuário
                e.preventDefault();
              } else {
                return $scope.nome.user;
              }
            }
          }
        ]
      });
    
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
    
     };

    
    init();
    
    function init(){
      $scope.showPopup();
    }
});





  app.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
  
    // Each tab has its own nav history stack:

    $stateProvider.state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'twitterController'
      }
    }
  })

});

