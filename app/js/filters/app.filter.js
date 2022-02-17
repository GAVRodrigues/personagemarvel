(function () {
  "use strict";
  angular.module("app")
    .filter("vazio", Vazio);

  function Vazio() {
    return function (empty) {
      if (empty) {
        return empty;
      } else {
        return "---";
      }
    };
  };
})();