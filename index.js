const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World I am working now!');
    });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}
);