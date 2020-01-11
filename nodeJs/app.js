const express = require('express');
const bodyParser = require('body-parser');
const CategoryRoutes = require('./routes/CategoriesRoutes').api;


const app = express();


//Configurar la CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', CategoryRoutes);


app.listen(3000, function() {

    console.log("corriendo en el puerto 3000");

});