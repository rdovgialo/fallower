const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) =>{
    res.send("")
});
require('./routes/requestRoutes')(app);
require('./routes/defautRoute')(app);

app.listen(5000)