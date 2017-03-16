angular
  .module('stockApp')
  .factory('StockFactory', function($http, SEARCH_URL) {
    return {
      getData: function(date, code) {
        return $http({
          method: 'GET',
          url: SEARCH_URL,
          params: {
            date: date,
            code: code
          }
        });
      }
    };
  });