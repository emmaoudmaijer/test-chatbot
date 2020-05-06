
const {
    dialogflow, List, SimpleResponse, BasicCard, Image, Button,
} = require('actions-on-google');
// Import the appropriate class
const { WebhookClient } = require('dialogflow-fulfillment');
const { Text, Card, Suggestion, Payload } = require('dialogflow-fulfillment');

const fetch = require("node-fetch"); 
const app = dialogflow();
let newResults = require('./pizzalist.json');
newResults.forEach(function(item,index){
    console.log(item.pizzalist)
})

//----- AB test
const experimentId = "-e8f2ocGS8O0G2MJU-kzYg";
let variationId =  Math.floor((Math.random() * 2))

app.intent('Default Welcome Intent', (conv) => {
    conv.ask("Hi! Welcome to this pizza restaurant, what would you like to order?")
    console.log(experimentId);
    console.log(variationId);
})

app.intent('list', (conv) => {
    console.log(variationId)
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
         }));
    })
})

module.exports = app;