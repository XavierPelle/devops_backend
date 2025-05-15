require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) =>
    res.send("Hello, projet Docker nodejs avec Railway !")
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
