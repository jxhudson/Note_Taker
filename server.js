// Links to connect
const express = require('express');
const routesApi = require('./routes/API');
const routesHtml = require('./routes/HTML');

// PORT and Express call
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(routesApi);
app.use(routesHtml);

// Establishes the PORT
app.listen(PORT, () => {
    console.log(`Listening localhost:${PORT}`);
})