/**
 * Created by yeoman generator-makrina:angular-app 0.3.0 on 17/10/2016.
 */

angular
  .module('KnobleAdminApp')
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/nodes', {
          template: '<node-list></node-list>'
        })
        .when('/nodes/:nodeId', {
          template: '<node-detail></node-detail>'
        })
        .otherwise('/nodes');
    }
  ]);
