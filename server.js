const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const PORT = process.env.PORT || 5000;

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
