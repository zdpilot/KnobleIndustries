(function(){

    angular.module('SaaSApp', [
        'ui.router',
        'ngAnimate',
        'ngStorage',
        'toaster'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: "<home-page></home-page>"
            })
            .state('dashboard', {
                url: '/dashboard',
                template: "<dashboardHome></dashboardHome>"
            })
            .state('contracts', {
                url: '/contracts',
                template: "<contractWidget></contractWidget>"
            });

    });

})();