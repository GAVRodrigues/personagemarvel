(function () {
  "use strict";

  angular.module("app")
    .controller("comic.controller", comicController);

  comicController.$inject = ["comic", "$uibModalInstance"];

  function comicController(comic, $uibModalInstance) {
    var vm = this;

    vm.comic = comic;

    vm.fechar = fechar;

    function fechar() {
      $uibModalInstance.close();
    };
  };

})();