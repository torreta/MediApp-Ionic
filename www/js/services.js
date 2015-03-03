angular.module('mediapp.services', [])
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

// angular.module('mediapp.services', [])

// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Andrew Jostlin',
//     lastText: 'Did you get the ice cream?',
//     face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
//   }, {
//     id: 3,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 4,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
//   }];

//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   }
// })

// /**
//  * A simple example service that returns some data.
//  */
// .factory('Friends', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var friends = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     notes: 'Enjoys drawing things',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     notes: 'Odd obsession with everything',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Andrew Jostlen',
//     notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
//     face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
//   }, {
//     id: 3,
//     name: 'Adam Bradleyson',
//     notes: 'I think he needs to buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 4,
//     name: 'Perry Governor',
//     notes: 'Just the nicest guy',
//     face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
//   }];


//   return {
//     all: function() {
//       return friends;
//     },
//     get: function(friendId) {
//       // Simple index lookup
//       return friends[friendId];
//     }
//   }
// });
