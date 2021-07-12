const express = require('express');
const db = require('../u-develop-it/db/connection');
const htmlRoutes = require('./routes/htmlRoutes');

const port = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`API server now on port ${PORT}!`);
    });
});