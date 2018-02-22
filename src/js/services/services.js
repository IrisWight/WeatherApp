//SERVICES
weatherApp.service('cityService', function(){
    this.city = 'New York';
});

weatherApp.service('weatherService', [ '$http', function( $http ){
    this.getWeather = function( city ) {
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ city +'&units=metric&cnt=6&APPID=61c4c139f16a86141fa238a983267188');
    }
}]);

