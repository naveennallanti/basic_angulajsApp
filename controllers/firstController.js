myApp.controller("firstController",function($scope,firstController_service){
    $scope.name="naveen";
    $scope.result=firstController_service.square();
    console.log("result",$scope.result);
});