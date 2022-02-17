(function () {
  "use strict";

  angular.module("app")
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        var path = "app/view/";

        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);

        $stateProvider
          .state("home", {
            url: "/",
            templateUrl: path + "home.html",
            controller: "home.controller",
            controllerAs: "vm",
          })
          // .state("detalhes", {
          //   url: "/:id",
          //   templateUrl: path + "detalhes.html",
          //   controller: "detalhes.controller",
          //   controllerAs: "vm",
          // });
      }]);
})();
