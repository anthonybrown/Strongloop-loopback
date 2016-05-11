module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('CoffeeShop', function(err) {
    if (err) throw err;

    app.models.CoffeeShop.create([
			{name: "Hobo's Cafe", city: 'Escondido', note: 'kick-ass coffee'},
      {name: 'Bel Cafe', city: 'Vancouver', note: 'Great place'},
      {name: 'Three Bees Coffee House', city: 'San Mateo', note: 'Love it'},
      {name: 'Caffe Artigiano', city: 'Vancouver', note: 'Super views'},
    ], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
