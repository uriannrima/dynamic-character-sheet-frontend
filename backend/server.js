// ================================================
// Requerimentos do Servidor:

// Criar aplicação já com configuração.
var app = require('./config/express')();

// API para carregar multiplos "require".
var load = require('express-load');

// ================================================
// Implementação do serviço:

// Carregar todos necessários
// Carregar database, então controllers e routers.
load('database').then('controllers').then('routes').into(app);

app.on('error', function(error) {
    console.log(error);
});

// Iniciar servidor.
app.listen(process.env.PORT,
    function() {
        console.log('Server running...');
    }
);