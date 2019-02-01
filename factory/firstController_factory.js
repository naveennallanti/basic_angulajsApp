myApp.factory("firstController_factory",function($http){
    var factory={};
    // factory.multiply=function(a,b){
    //     return a*b;
    // }
    $http.post('http://app.extrobuzzinvite.com/api/domains/getDomains', {
        headers:{

        }
    }).
    success(function(data, status) {
        console.log("data",data);
        console.log("status",status);
    }).
    error(function(data, status) {

    });
    factory.getData=function(data){
        return data;
    }
    return factory;
});