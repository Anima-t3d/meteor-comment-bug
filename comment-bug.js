if (Meteor.isClient) {
	Template.example.helpers(
		{
			array: function () {
				return [1,2,3,4]
			}
		}
	);
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
