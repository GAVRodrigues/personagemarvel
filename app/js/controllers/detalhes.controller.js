(function () {
  "use strict";

  angular.module("app")
    .controller("detalhes.controller", detalhesController);

  detalhesController.$inject = ["id", "marvel", "$uibModalInstance", "$uibModal"];

  function detalhesController(id, marvel, $uibModalInstance, $uibModal) {
    var vm = this;

    vm.visualizarModal = true;
    vm.loading = true;

    vm.iniciar = iniciar();
    vm.verComic = verComic;
    vm.fechar = fechar;

    function iniciar() {
      marvel.detalhes(id).then(function (response) {
        vm.detalhes = response.data.data.results[0];
        vm.loading = false;
      }).catch(function (error) {
        console.warn(error);
      });
    };

    function verComic(parametro) {
      marvel.verComic(parametro).then(function (response) {
        const comic = response.data.data.results[0];
        vm.visualizarModal = false;

        vm.modalInstance = $uibModal.open({
          templateUrl: "app/view/comic.html",
          controller: "comic.controller",
          controllerAs: "vm",
          backdrop: "static",
          keyboard: false,
          size: "lg",
          resolve: {
            comic: function () {
              return comic;
            }
          }
        });
        vm.modalInstance.result.then(function () {
          vm.visualizarModal = true;
        });
      }).catch(function (error) {
        console.warn(error);
      });
    };

    function fechar() {
      $uibModalInstance.close();
    };
  };

})();