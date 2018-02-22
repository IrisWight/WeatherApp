// CONTROLLERS
weatherApp.controller('searchController', [ '$scope', '$http', '$location', 'cityService', 'weatherService', 
    function( $scope, $http, $location, cityService, weatherService ){
        var vm = this;
        vm.city = cityService.city;

        $scope.$watch('searchVm.city', function(){
            cityService.city = vm.city;
        });

        vm.submit = function(){
            $location.path('/forecast');
        };
    }
]);

weatherApp.controller( 'forecastController', [ '$scope', '$http', 'cityService', 'weatherService', function( $scope, $http, cityService, weatherService ){
    var vm = this;
    vm.city = cityService.city;
    vm.round = round;
    vm.convertDate = convertDate;

    weatherService.getWeather( vm.city ).then( function(response){
        vm.cityWeather  = response.data;

        vm.data = {
            city: vm.cityWeather.city.name,
            date: vm.cityWeather.list[0].dt,
            temp: vm.round( vm.cityWeather.list[0].main.temp ),
            min: vm.round( vm.cityWeather.list[0].main.temp_min ),
            max: vm.round( vm.cityWeather.list[0].main.temp_max ),
            wind: vm.round( vm.cityWeather.list[0].wind.speed ),
            humidity: vm.cityWeather.list[0].main.humidity,
            desc: vm.cityWeather.list[0].weather[0].description
        };
    });

    // getApplication(applicant) {
    //     return $http
    //       .get(`/api/${applicant.id}`)
    //       .then(handleSuccess)
    //       .catch(handleError);
    //   }   

    function round (number){
        return Math.round( number );
    }

    function convertDate (date, lg = null, st = null){
        var d = new Date( date * 1000 );
        if( lg ) {
            return d.toLocaleString('en-US', {weekday: 'long'});
        } else if( st ) {
            return d.toLocaleString('en-US', {weekday: 'short'});
        } else {
            return d.toLocaleString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'});
        }
    }

}]);

weatherApp.controller( 'weatherItemController', [ '$scope', function( $scope,  ){
    var vm = this;

}]);

weatherApp.controller('weatherPrevItemController', [ '$scope', function( $scope ){
    var vm = this;
    vm.city = '1.1';
}]);