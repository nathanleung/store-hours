angular.module("storeCards", []);
angular
	.module("storeCards")
	.controller("StoreController", ["$scope", "Stores", function($scope, Stores) {
		$scope.stores = Stores;
	}])
	.directive("storeCards", function () {
		return {
			templateUrl: "store-card.template.html"
		};
	});