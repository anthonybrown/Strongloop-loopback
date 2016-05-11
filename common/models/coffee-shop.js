module.exports = function(CoffeeShop) {

	CoffeeShop.status = function(cb) {
		var currentDate = new Date();
		var currentHour = currentDate.getHours();
		var OPEN_HOUR = 6;
		var CLOSED_HOUR = 20;
		console.log('Current hour is ' + currentHour);
		var response;
		if (currentHour > OPEN_HOUR && currentHour < CLOSED_HOUR) {
			response = 'We are open for business!';
		} else {
			response = 'Sorry we are closed. Open daily from 6am to 8pm';
		}

		cb(null, response);
	}
	CoffeeShop.remoteMethod(
		'status',
		{
			http: {path: '/status', verb: 'get'},
			returns: {arg: 'status', type: 'string'}
		}
	);

	CoffeeShop.getName = function (shopId, cb) {
		CoffeeShop.findById(shopId, function (err, instance) {
			response = 'Name of coffee shop is '+ instance.name;
			cb(null, response);
			console.log(response);
		});
	}

	CoffeeShop.remoteMethod(
		'getName',
		{
			http: {path: '/getName', verb: 'get'},
			accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
			returns: {arg: 'name', type: 'string'}
		}
	);
}
