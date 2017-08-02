var app = require('./server.config');

var consign = require('consign');

consign().include('database').then('services').then('controllers').then('routes').into(app);

app.database.mongodb.connect(function () {
    // Then, starts the server.
    app.listen(process.env.PORT, function () {
        console.log('Listening.');
    });
});