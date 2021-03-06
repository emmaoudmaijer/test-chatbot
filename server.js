//------------------------------ SERVER SIDE EXPRESS SERVER ---------------------------------------------
require('dotenv').config()

const {WebhookClient} = require('dialogflow-fulfillment');
const express = require('express')
const bodyParser = require('body-parser')


const myApp = express()
//.use(bodyParser.json());
//myApp.use("/styles",  express.static('styles/main.css'));
//myApp.set('/', __dirname + '/')
var vari = 0;
//myApp.use(express.static(__dirname));
//app.use(express.bodyParser());
//myApp.use(express.static('/'))
//myApp.use(express.static(__dirname + '/'));
//myApp.use(myApp.router);
myApp.get('/',(req,res)=>{
  res.sendFile(__dirname + '/' + "index.html");//here you are passing the array and the renderer will do the job
  vari = req.query.vari;
  console.log(req.query)
  console.log('server-js: '+vari);
  })

  myApp.get('/ordered',(req,res)=>{
    res.sendFile(__dirname + '/' + "orderpizza.html");//here you are passing the array and the renderer will do the job
    })
    myApp.get('/basket',(req,res)=>{
      res.sendFile(__dirname + '/' + "basket.html");//here you are passing the array and the renderer will do the job
      })
    myApp.get('/detail',(req,res)=>{
      res.sendFile(__dirname + '/' + "detailpage.html");//here you are passing the array and the renderer will do the job
      })
      myApp.get('/checkout',(req,res)=>{
        res.sendFile(__dirname + '/' + "checkout.html");//here you are passing the array and the renderer will do the job
        })
  

  myApp.get('/styles/main.css', function(req, res) {
    res.sendFile(__dirname + "/styles/" + "main.css");
  });
  myApp.get('/styles/checkout.css', function(req, res) {
    res.sendFile(__dirname + "/styles/" + "checkout.css");
  });

  myApp.get('/styles/basket.css', function(req, res) {
    res.sendFile(__dirname + "/styles/" + "basket.css");
  });

  myApp.get('/images/', function(req, res) {
    res.sendFile(__dirname + "/images/" + "pizza.jpg");
  });
  myApp.get('/scripts/index.js', function(req, res) {
    res.sendFile(__dirname + "/scripts/" + "index.js");
  });
// res.render("index.html");//here you are passing the array and the renderer will do the job
// vari = req.query.vari;
// console.log('server-js: '+vari);

function WebhookProcessing(req, res) {
  const agent = new WebhookClient({request: req, response: res});
  console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
  console.log(JSON.stringify(req.body.queryResult.queryText));
  console.log(JSON.stringify(req.body.queryResult.fulfillmentText));

}

myApp.use(bodyParser.json());
myApp.use(bodyParser.urlencoded({extended: true}));



//------------------------------ DIALOGFLOW FULLFILLMENT ---------------------------------------------

const {
    dialogflow, List, SimpleResponse, BasicCard, Image, Button,
} = require('actions-on-google');
const { Text, Card, Suggestion, Payload } = require('dialogflow-fulfillment');

// LOAD DATASET PIZZA'S
const fetch = require("node-fetch"); 
const app = dialogflow();
let newResults = require('./pizzalist.json');
newResults.forEach(function(item,index){
    console.log(item.pizzalist)
})

app.intent('Default Welcome Intent', (conv) => {
    if (vari == 1 ) {
        conv.ask("Hi! Welcome to this pizza restaurant, what would you like to order?")
      } else {
        conv.ask("Hello! Would you like to order a pizza?")
      }
})

app.intent('list', (conv) => {
    console.log('intent '+ vari)
    if (vari == 1 ) {
      conv.ask("Here is a list with all all the pizza's we have available:");
      newResults.forEach(function(item,index){
         conv.ask(new BasicCard({
            title: item.pizzalist,
            text: item.description,
            price: item.price,
            image: new Image({
                url: item.img,
                alt: "pizza's",
            }),
            buttons: new Button({
                title: 'Order',
                url: '/ordered',
              }),
         }));
      })
    } else {
        conv.ask("We have different pizza's on our menu like: Margaritha, Diavola, Funghi, Napoletana, Salami and many more!");
        conv.ask("Let me know if you see one who you like and would like to order");
        newResults.forEach(function(item,index){
          conv.ask(new BasicCard({
             title: item.pizzalist,
             text: item.price,
             image: new Image({
                 url: item.img,
                 alt: "pizza's",
             }),
             buttons: new Button({
                 title: 'Order this pizza',
                 url: '/ordered',
               }),
          }));
       })

      }

    });  

// Handle the Dialogflow follow-up intents
app.intent(['list - custom', 'list - custom'], (conv,) => {
  //conv.ask('Great! you ordered a pizza:' + pizzalist);
  // If the user is using a screened device, display the carousel
  //if (conv.screen) return conv.ask(fakeColorCarousel());
 });
 //ga('[trackerName.]send', [hitType], [...fields], [fieldsObject]);



myApp.post('/', app)
myApp.listen(process.env.PORT || 8000);