const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const { createServer } = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db.js');
const { logger } = require('./config/logger.js');
const { corsOptions, handleCors } = require('./middleware/cors.js');
const { handleErrors } = require('./middleware/error.js');
const { handleNotFound } = require('./middleware/notFound.js');
const apiRouter = require('./routes/index.js');

// Load environment variables
const dotenv = require('dotenv');
dotenv.config();

// Connect to the database
connectDB();

// Create an Express app
const app = express();

// Apply middleware
app.use(handleCors(corsOptions), logger, express.json(), express.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRouter);

// Serve static assets in production
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Error handling middleware
app.use(handleErrors());

// Not found middleware
app.use(handleNotFound());

// Create an HTTP server and attach Socket.IO to it
const server = createServer(app);
const io = new Server(server);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log(`Socket.IO client connected: ${socket.id}`);
});

