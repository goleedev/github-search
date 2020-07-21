const http = require('http');
const express = require('express');
const cors = require('cors');

const router = require('./router');

const app = express();
const server = http.createServer(app);

app.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));