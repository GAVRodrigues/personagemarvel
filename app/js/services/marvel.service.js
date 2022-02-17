(function () {
  "use strict";
  angular.module("app")
    .service("marvel", ["$http", "md5", function ($http, md5) {
      const timeStamp = Date.now().toString();
      const privateKey = "fbf255068eccea6d0ef951b9f25626b57ab2fe72";
      const publicKey = "5a237863b3cc2061003cbbc4fe20dc06";
      const hash = md5.createHash(timeStamp + privateKey + publicKey);
      return {
        buscar: function (parametro) {
          const url = "http://gateway.marvel.com/v1/public/characters?orderBy=name&limit=5&nameStartsWith=" + parametro +
            "&ts=" + timeStamp + "&apikey=" + publicKey + "&hash=" + hash;

          return $http.get(url);
        },
        detalhes: function (parametro) {
          const url = "http://gateway.marvel.com/v1/public/characters/" + parametro +
            "?ts=" + timeStamp + "&apikey=" + publicKey + "&hash=" + hash;

          return $http.get(url);
        },
        verComic: function (parametro) {
          const url = parametro + "?ts=" + timeStamp + "&apikey=" + publicKey + "&hash=" + hash;

          return $http.get(url);
        },
      };
    }]);
})();