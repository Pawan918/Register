const express = require('express');
const path = require('path')
const db = require('./db/connection');
const User = require('./models/users');
const Country = require('./models/country');
const City = require('./models/city');
const State = require('./models/state');
const { resolveSoa } = require('dns');
const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
// const static_path2 = path.join(__dirname,"./src/controller");
// console.log(__dirname);
app.use(express.static(static_path));
// app.use(express.static(static_path2));
app.set('view engine',"ejs");
app.get("/",(req,res)=>{
    res.render('index');
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// use to post form result in the database
app.post('/register',async(req,res)=>{
    try{
        const user = new User({
            firstName:req.body.first_name,
            lastName:req.body.last_name,
            email : req.body.email,
            country:req.body.country,
            state : req.body.state,
            city : req.body.city,
            dob : req.body.dob,
            gender : req.body.gender,
            age : req.body.age

        })
        const users =await user.save();
        res.status(201).send(users);
    }catch(err){
        res.status(400).send(err);
    }
});

// use to get the result of all the countries
app.get('/api/countries', async (req, res) => {
    try {
      const countries = await Country.find();
      res.json(countries);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });

// use to get the result of the country by the name of the country
  app.get('/api/countries/:name', async (req, res) => {
    try {
      const countries = await Country.find({name : req.params.name});
      res.json(countries);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });
  
  // use to get the result of the state by their country_id
  app.get('/api/states/:country_id', async (req, res) => {
    try {
      const state = await State.find({ country_id: req.params.country_id });
      res.json(state);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });
  
  // use to get the result of the state by their name
  app.get('/api/states/name/:name', async (req, res) => {
    try {
      const state = await State.find({ name: req.params.name });
      res.json(state);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });
  
  // use to get the result of the cities by thier state_id
  app.get('/api/cities/:state_id', async (req, res) => {
    try {
      const city = await City.find({ state_id: req.params.state_id });
      res.json(city);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  });
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})