var app = require('./app.config');

var consign = require('consign');

consign().include('database').then('services').then('controllers').then('routes').into(app);

app.mongodb.connect(function () {
    // Then, starts the server.
    app.listen(5000, function () {
        console.log('App listening to ' + 5000 + '.');
    });
});