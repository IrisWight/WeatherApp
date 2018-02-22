
weatherApp.component('weatherItem',{
    templateUrl: '../views/weather-item.html',
    controller: 'weatherItemController',
    controllerAs: 'weatherItemVm',
    bindings: {
        data: '=',
        convertDate: '&'
    }
});