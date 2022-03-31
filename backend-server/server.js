require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const apiRouter = require('./routes/index');
const app = express();

// Connecting bd
connectDB();

// Middleware
app.use(morgan('tiny'));
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', function (req, res) {
    res.send('Server')
});

// Middleware
app.use('/api', apiRouter);

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Port
app.set('PORT', process.env.PORT || 5000);
app.listen(app.get('PORT'), function () {
    console.log('Running on port ' + app.get('PORT'));
});
