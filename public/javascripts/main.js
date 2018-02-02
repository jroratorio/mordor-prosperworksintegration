var app = angular.module('app', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){
    $scope.name = '';
    $scope.email = '';
    $scope.number = '';
    $scope.flashtext = '';
    $scope.success = false;
    $scope.loading = false;
    
    $scope.submit = function(){
        
        $scope.loading = true;
        var payload = {
            name: $scope.name,
            email: $scope.email,
            number: $scope.number            
        };
        
        $http.post('/api/addpost', payload)
                .then(function(data, status){
                    // success response
                    $scope.success = true;
                    $scope.loading = false;
                    $scope.flashtext = data.data;                   
                                        
                })
                .catch(function(data, status){
                    // failure response
                    $scope.success = false;
                    $scope.flashtext = data.data;
                });
    };
}]);