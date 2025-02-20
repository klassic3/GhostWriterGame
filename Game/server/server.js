const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const mongoose = require('mongoose');
const gameroutes = require('./routes/gameRoutes.js');
const userroutes = require('./routes/userRoutes.js');

// Initialize environment variables
config();

// Create Express app instance
const app = express();

// Set up middlewares
app.use(cors());
app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Routes
app.use('/api/game', gameroutes);
app.use('/api/user', userroutes);

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1); // Exit the process if database connection fails
    }
};

// Start the server after DB connection
const startServer = async () => {
    await connectDB();

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

// Call the startServer function
startServer();
