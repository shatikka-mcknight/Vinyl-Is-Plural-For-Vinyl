const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const Discogs = require('disconnect').Client;
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
dotenv.config()

const sequelize = require ('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

console.log(helpers.format_date)
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api', (req, res) => res.send("tst here"));

app.use(require('./controllers/'));

var db = new Discogs({
    consumerKey: process.env.ConsumerKey,
    consumerSecret: process.env.ConsumerSecret
}).database();
console.log(db)
console.log(db.search({artist:"Beachwood Sparks"}).then(data => console.log(data)))





const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });