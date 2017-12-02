var serviceURI = "/WebShopWeb/api/v1/books/list";

var bmApp = angular.module("bmApp",[]);

bmApp.controller("bmStartViewController",['$scope','$http',function($scope,$http){
	
	$scope.books = [];
	$scope.searchFilter = '';
	$scope.search = '';
	
	$scope.getAllBooks = function($scope, $http) {
		
		$http.get(serviceURI) 
		     .success(function(data) {
		    	 $scope.books = data; })
		     .error(function(error) {
		    	 console.log(error); });		
	}
	
	$scope.applySearchFilter = function() {
		$scope.searchFilter = $scope.search;
	}

	$scope.getAllBooks($scope, $http);
	
}]);