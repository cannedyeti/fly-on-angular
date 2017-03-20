angular.module("FlyApp")
.factory("PlanesAPI", ["$http", function($http) {
    return {
        getPlanes: function() {
            return $http.get("/api/airplanes");
        }, 
        getPlane: function(id) {
            return $http.get("/api/airplanes/" + id);
        },
        addPlane: function(plane) {
            return $http.post("/api/airplanes", plane)
            .then(function success(res) {
                console.log("nice add!", res);
                return res.data;
            }, function error(err) {
                console.log("There was an error!", err);
                return null;
            })
        },
        deletePlane: function(id) {
            return $http.delete("/api/airplanes/" + id)
            .then(function success(res) {
                console.log("nice delete!", res);
                return res.data;
            }, function error(err) {
                console.log("There was an error!", err);
                return null;
            })
        },
        updatePlane: function(plane) {
            return $http.put("api/airplanes/" + plane._id, plane)
            .then(function success(res){
                return res.data
            }, function error (err){
                return null;
            });
        }    
    };
}])