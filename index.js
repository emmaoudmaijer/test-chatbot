const functions = require('firebase-functions');

const {WebhookClient, Card, Suggestion} = require('dialogflow-fulfillment');

const {
    dialogflow
} = require('actions-on-google');

const app = dialogflow();

function getTotal (agent){
  //make api call to order total
  agent.add(`Your total is $15.50. Can i have a name and phone number for the order?`);
  }

exports.fulfillment = functions.https.onRequest(app);

