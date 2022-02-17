(function () {
  "use strict";

  angular.module("app")
    .controller("home.controller", homeController);

  homeController.$inject = ["marvel", "ngNotify", "$uibModal"];

  function homeController(marvel, ngNotify, $uibModal) {
    var vm = this;

    vm.cards = [];
    vm.loading = false;

    vm.buscarPersonagem = buscarPersonagem;
    vm.detalhes = detalhes;

    function buscarPersonagem() {
      if (vm.personagem) {
        vm.loading = true;
        marvel.buscar(vm.personagem).then(function (response) {
          vm.resultado = response.data.data.results;
          vm.personagem = null;

          if (vm.resultado.length > 0) {
            vm.cards = [];
            angular.forEach(vm.resultado, function (value, key) {
              vm.cards.push({
                id: value.id,
                name: value.name,
                thumbnail: value.thumbnail.path + "." + value.thumbnail.extension,
                urls: value.urls
              });
            });
          } else {
            ngNotify.set("Personagem não encontrado", "error");
          };
          vm.loading = false;
        }).catch(function (error) {
          console.warn(error);
        });
      };
    };

    function detalhes(id) {
      vm.modalInstance = $uibModal.open({
        templateUrl: "app/view/detalhes.html",
        controller: "detalhes.controller",
        controllerAs: "vm",
        backdrop: "static",
        keyboard: false,
        size: "lg",
        resolve: {
          id: function () {
            return id;
          }
        }
      });
    };
  };

})();