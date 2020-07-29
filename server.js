//Simple Express program

const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => res.send('Hi from Express'));

app.listen(port, () => console.log(`Server is running at ${port}`));