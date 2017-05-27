(function () {
  'use strict';

  angular.module('passwordmanagerApp')
    .constant('apiConfig', {
      'urlBase': '/api/servises/'
    })
    .service('ApiService', ['$http', '$q', '$sce', function ($http, $q, $sce) {

      return {
        loadServices: loadServices,
        getById: getById,
      };

      function loadServices() {
        return $http.get(apiConfig.urlBase)
          .then(function (response) {
            return response.data;
          });
      }

      function getById(id) {
        return $http.get(apiConfig.urlBase + id)
          .then(function (response) {
            return response.data;
          });
      }
    }]);
})();