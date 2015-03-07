angular.module('mediapp.services', ['ngStorage'])
	.factory('Api', function() {
		return {
			// http://torreta-163528.sae1.nitrousbox.com/api/v1
			// http://192.168.233.131:3000/api/v1
			// http://localhost:3000/api/v1
			api_url : 'http://localhost:3000/api/v1'
		};
	})
	.factory('Utils', function() {
			var hours = [
				{ id: "00:00", name: '12:00 AM' },
				{ id: "01:00", name: '1:00 AM' },
				{ id: "02:00", name: '2:00 AM' },
				{ id: "03:00", name: '3:00 AM' },
				{ id: "04:00", name: '4:00 AM' },
				{ id: "05:00", name: '5:00 AM' },
				{ id: "06:00", name: '6:00 AM' },
				{ id: "07:00", name: '7:00 AM' },
				{ id: "08:00", name: '8:00 AM' },
				{ id: "09:00", name: '9:00 AM' },
				{ id: "10:00", name: '10:00 AM' },
				{ id: "11:00", name: '11:00 AM' },
				{ id: "12:00", name: '12:00 PM' },
				{ id: "13:00", name: '1:00 PM' },
				{ id: "14:00", name: '2:00 PM' },
				{ id: "15:00", name: '3:00 PM' },
				{ id: "16:00", name: '4:00 PM' },
				{ id: "17:00", name: '5:00 PM' },
				{ id: "18:00", name: '6:00 PM' },
				{ id: "19:00", name: '7:00 PM' },
				{ id: "20:00", name: '8:00 PM' },
				{ id: "21:00", name: '9:00 PM' },
				{ id: "22:00", name: '10:00 PM' },
				{ id: "23:00", name: '11:00 PM' }
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
