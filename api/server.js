var app = require('./app.config');
var consign = require('consign');

consign().include('database').then('services').then('controllers').then('routes').into(app);

app.database.mongodb.connect(function () {
    // Then, starts the server.
    var appPort = process.env.PORT + 1|| 4001;
    app.listen(appPort, function () {
        console.log('App listening to ' + appPort + '.');
    });
});