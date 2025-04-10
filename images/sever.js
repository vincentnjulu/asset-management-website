const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const assetRoutes = require('./routes/assets');
const userRoutes = require('./routes/users');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/assets', assetRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
