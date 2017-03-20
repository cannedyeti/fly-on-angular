angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", 'PlanesAPI', function($scope, PlanesAPI) {
    $scope.title = "LOOK AT ALL MY FKIN ZOIDS!";
    $scope.planes = [];
    $scope.searchWord ;

    PlanesAPI.getPlanes().then(function success(res){
        console.log("Naicu", res)
        $scope.planes = res.data;
    }, function error(err){
        console.log("Oh NO!", err)
    })
// HALP
    $scope.searchPlane = function() {
        console.log("here")
        PlanesAPI.getPlanes($scope.searchTerm).then(function (res) {
            console.log(res)
            $scope.planes = res.data;
        }, function error(err) {
            console.log("Nooo", err)
        })
    }
}])
.controller("DetailCtrl", ['$scope', '$stateParams', 'PlanesAPI', "$location", function($scope, $stateParams, PlanesAPI, $location) {
    $scope.title = "Suck it and see"
    $scope.plane = {};

    PlanesAPI.getPlane($stateParams.id).then(function success(res) {
        $scope.plane = res.data;
    }, function error(err) {
        console.log("Shit", err)
    })
    $scope.delete = function() {
        PlanesAPI.deletePlane($stateParams.id);
    }
    $scope.updatePlane = function(){
    
    PlanesAPI.updatePlane($scope.plane).then(function success(res){
        console.log("success", res);
        $location.path('/plane/' + $scope.plane._id);
    }, function error(err){
        console.log("Error", err);
        });
    };
}])
.controller("NewPlaneCtrl", ["$scope", "$location", "PlanesAPI", function($scope, $location, planesAPI){
    $scope.plane = {
        manufacturer: '',
        model: '',
        engines: '',
        picture: ''
    };
    $scope.addPlane = function(){
        console.log($scope.plane);
        planesAPI.addPlane($scope.plane).then(function success(res){
            console.log("success", res);
            $location.path('/');
        }, function error(err){
            console.log("Error", err);
            });
    };

}])
.filter('fixGrammar', function() {
    return function(input) {
        if (input == 1) {
            return "1 engine"
        } else {
            return input + " engines";
        }
    }
})