const cors = require('cors');

const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const handleCors = (options) => cors(options);

module.exports = { corsOptions, handleCors };

