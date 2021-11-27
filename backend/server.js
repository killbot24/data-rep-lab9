const express = require('express')
const app = express()
const port = 4000 //Port it listens to
const cors = require('cors');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const myConnectionString= 'mongodb+srv://admin:admin@cluster0.y4cnm.mongodb.net/movies?retryWrites=true&w=majority';//connection url
mongoose.connect(myConnectionString,{useNewURLParser: true});//connects to database
//create a new database schema
var Schema = mongoose.Schema;
var movieSchema = new Schema({
  Title: String,
Year: String,
Poster: String
})
//use the schema to create a new "movie" database model.
var MovieModel = mongoose.model('movies', movieSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {//Home page called sends this message
  res.send('Welcome to DataRepresentation & Querying')//Sends message
})

app.delete('/api/movies/:id'),(req,res)=>{
  console.log("Delete movies: "+req.params.id);
  MovieModel.findByIdAndDelete(req.params.id),(err,data)=>{//Finds movie with this id and deletes
  res.send(data);
  }
}

app.get('/api/movies', (req, res, next) => {//Gets data from database
  MovieModel.find(function (err, data) {
  console.log(data);
  res.json(data);
  });
  })
  app.put('/api/movies/:id', (req, res) => {//Gets info from data based on id
    console.log("Update movie: "+req.params.id);
    console.log(req.body);
    MovieModel.findByIdAndUpdate(req.params.id,req.body,{new:true},//Updates record based off id
      (err,data)=>{
        res.send(data);
        console.log(err)
      }) 

    })
app.post('/api/movies', (req, res) => {//sends info over to database
  console.log(req.body)
  console.log(req.body.Title);
  console.log(req.body.Year);
  console.log(req.body.Poster);
  MovieModel.create({//Creates entrys for info
  Title: req.body.Title,
  Year: req.body.Year,
  Poster: req.body.Poster
  });
  res.send('Item added');
  })
app.listen(port, () => {//Sets up listen
  console.log(`Example app listening at http://localhost:${port}`)
})

