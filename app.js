const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');

// Testing DB connection
db.authenticate()
    .then(()  => console.log('Database connected....'))
    .catch(err => console.log('Error:'+err))

const app = express();

//// Index route
// A get request response
app.get('/', (req, res) => res.send('INDEX'));

// Routes for gigs
app.use('/gigs', require('./routes/gigs'));

// specifying port on which server will start
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
