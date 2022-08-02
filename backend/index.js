
const express       = require('express');
const bodyParser    = require('body-parser');
const auth          = require('./http/routes/auth');
const backend       = require('./http/routes/backend');
const port          = 5000;
const app           = express();


app.use(function (req, res, next){
    res.header("Access-Control-Expose-Headers", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
  


app.use('/', auth);
app.use('/', backend);

app.listen(port, function() {
    console.log("Server is listening at port:" + port);
});