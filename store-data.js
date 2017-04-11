angular.
  module('storeApp').
  	factory("Stores", function() {
  		return [
			{
				name: 'Costco',
				status: 'Closed',
				hours: "9:00 AM - 5:00 PM"
			},
			{
				name: 'No Frills',
				status: 'Closed',
				hours: "9:00 AM - 5:00 PM"
			}
		];
;  	})