var app = require('./app.config');

var consign = require('consign');

consign().include('database').then('services').then('controllers').then('routes').into(app);

app.mongodb.connect(function () {
    var port = process.env.PORT || 5000;
    // Then, starts the server.
    app.listen(port, function () {
        console.log('App listening to ' + port + '.');
    });
});