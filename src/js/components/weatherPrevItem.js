
weatherApp.component('weatherPrevItem',{
    templateUrl: '../views/weather-prev-item.html',
    controller: 'weatherPrevItemController',
    controllerAs: 'weatherPrevItemVm',
    bindings: {
        unique: '=',
        convertDate: '&',
        round: '&',
        getIcon: '&'
    }
});