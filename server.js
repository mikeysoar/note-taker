const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');

const port = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express
app.use
app.use


app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log (`API server now on port ${PORT}!`);
});