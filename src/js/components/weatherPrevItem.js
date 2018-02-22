
weatherApp.component('weatherPrevItem',{
    templateUrl: '../views/weather-prev-item.html',
    controller: 'weatherPrevItemController',
    controllerAs: 'weatherPrevItemVm',
    bindings: {
        cityWeather: '=',
        convertDate: '&',
        round: '&'
    }
});