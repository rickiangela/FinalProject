const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('the api is running'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`the server running on port ${PORT}`));