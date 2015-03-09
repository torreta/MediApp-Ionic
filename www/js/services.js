angular.module('mediapp.services', ['ngStorage'])
	.factory('Api', function() {
		return {
			// http://torreta-163528.sae1.nitrousbox.com/api/v1
			// http://192.168.233.131:3000/api/v1
			// http://localhost:3000/api/v1
			api_url : 'http://torreta-163528.sae1.nitrousbox.com/api/v1'
		};
	})
	.factory('Utils', function() {
			var hours = [
				{ id: "12:00 AM", name: '12:00 AM' },
				{ id: "1:00 AM", name: '1:00 AM' },
				{ id: "2:00 AM", name: '2:00 AM' },
				{ id: "3:00 AM", name: '3:00 AM' },
				{ id: "4:00 AM", name: '4:00 AM' },
				{ id: "5:00 AM", name: '5:00 AM' },
				{ id: "6:00 AM", name: '6:00 AM' },
				{ id: "7:00 AM", name: '7:00 AM' },
				{ id: "8:00 AM", name: '8:00 AM' },
				{ id: "9:00 AM", name: '9:00 AM' },
				{ id: "10:00 AM", name: '10:00 AM' },
				{ id: "11:00 AM", name: '11:00 AM' },
				{ id: "12:00 PM", name: '12:00 PM' },
				{ id: "1:00 PM", name: '1:00 PM' },
				{ id: "2:00 PM", name: '2:00 PM' },
				{ id: "3:00 PM", name: '3:00 PM' },
				{ id: "4:00 PM", name: '4:00 PM' },
				{ id: "5:00 PM", name: '5:00 PM' },
				{ id: "6:00 PM", name: '6:00 PM' },
				{ id: "7:00 PM", name: '7:00 PM' },
				{ id: "8:00 PM", name: '8:00 PM' },
				{ id: "9:00 PM", name: '9:00 PM' },
				{ id: "10:00 PM", name: '10:00 PM' },
				{ id: "11:00 PM", name: '11:00 PM' }
			];
			var frequencies = [
				{ id: 1 },
				{ id: 2 },
				{ id: 3 },
				{ id: 4 },
				{ id: 5 },
				{ id: 6 },
				{ id: 7 },
				{ id: 8 },
				{ id: 9 },
				{ id: 10 },
				{ id: 11 },
				{ id: 12 },
				{ id: 13 },
				{ id: 14 },
				{ id: 15 },
				{ id: 16 },
				{ id: 17 },
				{ id: 18 },
				{ id: 19 },
				{ id: 20 },
				{ id: 21 },
				{ id: 22 },
				{ id: 23 },
				{ id: 24 },
			];
			return {
				hours: hours,
				frequencies: frequencies
			};
	});
