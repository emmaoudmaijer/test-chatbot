//------------------------------ SERVER SIDE EXPRESS SERVER ---------------------------------------------

const {WebhookClient} = require('dialogflow-fulfillment');
const express = require('express')
const bodyParser = require('body-parser')

const myApp = express().use(bodyParser.json());
var vari = 0;

myApp.get('/',(req,res)=>{
  
  res.sendFile(__dirname + '/public/' + "index.html");//here you are passing the array and the renderer will do the job
  vari = req.query.vari;
  console.log('server-js: '+vari);
  })

myApp.use(express.static(__dirname + '/public'));
 
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
    console.log('intent'+ vari)
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
                url: 'https://assistant.google.com/',
              }),
         }));
    })} else {
        conv.ask("We have many pizza's on our menu!");
        conv.ask("Let me know if you see one who you like and would like to order :)");
        //console.log(variationId)
       // newResults.forEach(function(item,index){
            // conv.ask(new List({
            //     items: {
            //         title:  item.pizzalist,
            //         text: item.description,
            //       },
            //     //   [SELECTION_KEY_TWO]: {
            //     //     title: 'Number two',
            //     //     synonyms: ['synonym of KEY_TWO 1', 'synonym of KEY_TWO 2'],
            //     //   }    
            //   }))
          //  })
    }
    })

myApp.post('/', app)
myApp.listen(process.env.PORT || 8000);