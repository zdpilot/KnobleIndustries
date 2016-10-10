(function () {

    angular.module('SaaSApp')
        .component('homePage', {
            templateUrl: "Components/CompHTML/home-page.html",
            controller: homeController
        });

    function homeController(
        
    ) {
        var self = this;
        console.log("Testing")
        
    }

})();