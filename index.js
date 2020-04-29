const functions = require('firebase-functions');

const {WebhookClient, Card, Suggestion} = require('dialogflow-fulfillment');

const {
    dialogflow
} = require('actions-on-google');

const app = dialogflow();

app.intent('Default Welcome Intent', (conv) => {
    conv.ask("Hi! Welcome to this pizza restaurant, what would you like to order?")
})

app.intent('list', (conv) => {
  conv.ask("We have this pizza's available")
  // agent.add(new Card({
  //             title: 'Title: this is a card title',
  //             imageUrl: 'https://developers.google.com/actions/assistant.png',
  //             text: 'This is the body text of a card.  You can even use line\n  breaks and emoji! 💁',
  //             buttonText: 'This is a button',
  //             buttonUrl: 'https://assistant.google.com/'
  //           })
  //list of different pizza and toppings ("We have this pizza's available")
})

// exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {
//     const agent = new WebhookClient({ req, res });
    
//     function intentHandler(agent) {
//       agent.add('This message is from Dialogflow\'s Cloud Functions for Firebase editor!');
//       agent.add(new Card({
//           title: 'Title: this is a card title',
//           imageUrl: 'https://developers.google.com/actions/assistant.png',
//           text: 'This is the body text of a card.  You can even use line\n  breaks and emoji! 💁',
//           buttonText: 'This is a button',
//           buttonUrl: 'https://assistant.google.com/'
//         })
//       );
//       agent.add(new Suggestion('Quick Reply'));
//       agent.add(new Suggestion('Suggestion'));
//     }
  
//     agent.handleRequest(intentHandler);
//   });


function getTotal (agent){
  //make api call to order total
  agent.add(`Your total is $15.50. Can i have a name and phone number for the order?`);
  }

exports.fulfillment = functions.https.onRequest(app);
