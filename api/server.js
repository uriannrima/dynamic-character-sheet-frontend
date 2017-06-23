var app = require('./server.config');

var consign = require('consign');

consign().include('database').then('controllers').then('routes').into(app);

app.database.mongodb.connect(function () {
    // Then, starts the server.
    app.listen(3003, function () {
        console.log('Listening.');
    });
});