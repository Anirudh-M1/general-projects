import express from 'express'; 
import routes from './src/routes/crmRoutes'; 
import mongoose from 'mongoose';
import bodyParser  from 'body-parser';
const app = express(); 
const PORT = 3000; 

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/CRMdb');

// body parser setup
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json()); 

//serving static files
app.use(express.static('public'));

routes(app); 

app.get('/', (req,res)=> 
    res.send(`node and express server is running on port ${PORT}`)
);

app.listen(PORT, ()=>
    console.log(`Your server is running on port ${PORT}`)
);