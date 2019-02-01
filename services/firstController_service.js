myApp.service("firstController_service", function (firstController_factory) {
    this.square = function (a) {
        return firstController_factory.getData();
    }
});