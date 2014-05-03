angular.module('goyang2014', ['ionic', 'goyang2014.controllers'])

.directive('blink', function () {
  return {
    templateUrl: 'templates/blink.html'
  };
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      templateUrl: 'templates/nav.html'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'content': {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('app.elements', {
      url: '/elements',
      views: {
        'content': {
          templateUrl: 'templates/elements.html',
          controller: 'ElementsController'
        }
      }
    })

    .state('app.musicians', {
      url: '/musicians',
      views: {
        'content': {
          templateUrl: 'templates/musicians.html',
          controller: 'MusiciansController'
        }
      }
    })

    .state('app.info', {
      url: '/info',
      views: {
        'content': {
          templateUrl: 'templates/info.html',
          controller: 'InfoController'
        }
      }
    })

  $urlRouterProvider.otherwise('/home');
});
