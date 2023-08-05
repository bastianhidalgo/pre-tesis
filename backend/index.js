const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const visitaRoutes = require('./routes/visitaRoutes');

app.use(bodyParser.json());
app.use(cors())
app.use(express.json());
app.options('*',cors())

app.use('/api',visitaRoutes)



app.listen(process.env.PORT,()=>{
    console.log("El servidor está en el puerto ",process.env.PORT)
})