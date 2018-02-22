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

weatherApp.controller( 'forecastController', [ '$scope', '$http', 'cityService', 'weatherService',
function( $scope, $http, cityService, weatherService ){
    var vm = this;
    vm.city = cityService.city;
    vm.round = round;
    vm.convertDate = convertDate;
    vm.getIcon = getIcon;

    weatherService.getWeather( vm.city ).then( function(response){
        vm.cityWeather = response.data;
        var item = vm.cityWeather.list[0];

        vm.data = {
            city: vm.cityWeather.city.name,
            date: item.dt,
            temp: vm.round( item.main.temp ),
            min: vm.round( item.main.temp_min ),
            max: vm.round( item.main.temp_max ),
            wind: vm.round( item.wind.speed ),
            humidity: item.main.humidity,
            desc: item.weather[0].description,
            icon: vm.getIcon( item.weather[0].main )
        };

        console.log(vm.cityWeather);
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

    function getIcon( code ){
        this.icons = {
            clouds: 'wi wi-day-cloudy',
            rain: 'wi wi-day-rain',
            snow: 'wi wi-day-snow',
            thunderstorm: 'wi-day-thunderstorm',
            clear: 'wi wi-day-sunny'
        }
        for (key in this.icons) {
            if( key === code.toLowerCase() ) {
                return this.icons[key]
            } else{
                return this.icons['clouds']
            }
        }
    };

}]);

weatherApp.controller( 'weatherItemController', [ '$scope', function( $scope,  ){
    var vm = this;

}]);

weatherApp.controller('weatherPrevItemController', [ '$scope', function( $scope ){
    var vm = this;
    vm.city = '1.1';
}]);