const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const router = require('./app/routes');

require('./app/config/database');

app.use(cors(), express.json(), express.urlencoded({ extended: true }), router);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}...`);
});
