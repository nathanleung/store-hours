angular.module("storeList", []);
angular
	.module("storeList")
	.controller("ListController", ["$scope", "Stores", function($scope, Stores) {
		$scope.stores = Stores;
	}])
	.directive("storeList", function () {
		return {
			templateUrl: "store-list.template.html"
		};
	});