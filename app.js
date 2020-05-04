
const {
    dialogflow, List, BasicCard, Image, Button
} = require('actions-on-google');
// Import the appropriate class

const { WebhookClient } = require('dialogflow-fulfillment');
 //Create an instance
//const agent = new WebhookClient({request: request, response: response});
const { Text, Card, Suggestion, Payload } = require('dialogflow-fulfillment');

const fetch = require("node-fetch"); 
const app = dialogflow();


app.intent('Default Welcome Intent', (conv) => {
    conv.ask("Hi! Welcome to this pizza restaurant, what would you like to order?")
})

app.intent('list', (conv) => {
    //agent.add("text")
      conv.ask("We have this pizza's available:");
    //  conv.writeln("hallo");
    // //  conv.ask("another list:")
    //  conv.ask(new BasicCard({
    //     text: `This is a basic card.  Text in a basic card can include "quotes" and
    //     most other unicode characters including emojis.  Basic cards also support
    //     some markdown formatting like *emphasis* or _italics_, **strong** or
    //     __bold__, and ***bold itallic*** or ___strong emphasis___ as well as other
    //     things like line  \nbreaks`, // Note the two spaces before '\n' required for
    //                                  // a line break to be rendered in the card.
    //     subtitle: 'This is a subtitle',
    //     title: 'Title: this is a title',
    //     buttons: new Button({
    //       title: 'This is a button',
    //       url: 'https://assistant.google.com/',
    //     })

    }) 
    //  conv.add(new BasicCard({
    //     title: "he1",
    //     subtitle: "h",
    //     image: "yyg",
    //     text: "fdsd"
    // }));
    //  conv.ask("and this")

    //  conv.ask(new List({
    //     items:{
    //       red: {title: "red"},
    //       green: {title: "green"},
    //       blue: {title: "blue"},
    //       // You get the idea
    //       pearl: {title: "pearl"}
    //     }}))
 
//   // Create a list
//  // console.log("hello")
  //   conv.ask("I have this pizza's available");
//   conv.ask(   new List({
//     title: 'List Title',
//     items: {
//       // Add the first item to the list
//       'SELECTION_KEY_ONE': {
//         synonyms: [
//           'synonym 1',
//           'synonym 2',
//           'synonym 3',
//         ],
//         title: 'Title of First List Item',
//         description: 'This is a description of a list item.',
//         image: new Image({
//           url: 'https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png',
//           alt: 'Image alternate text',
//         }),
//       },
//       // Add the second item to the list
//       'SELECTION_KEY_GOOGLE_HOME': {
//         synonyms: [
//           'Google Home Assistant',
//           'Assistant on the Google Home',
//       ],
//         title: 'Google Home',
//         description: 'Google Home is a voice-activated speaker powered by ' +
//           'the Google Assistant.',
//         image: new Image({
//           url: 'https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png',
//           alt: 'Google Home',
//         }),
//       },
//       // Add the third item to the list
//       'SELECTION_KEY_GOOGLE_PIXEL': {
//         synonyms: [
//           'Google Pixel XL',
//           'Pixel',
//           'Pixel XL',
//         ],
//         title: 'Google Pixel',
//         description: 'Pixel. Phone by Google.',
//         image: new Image({
//           url: 'https://storage.googleapis.com/actionsresources/logo_assistant_2x_64dp.png',
//           alt: 'Google Pixel',
//         }),
//       },
//     },
//   })
//  );
    //console.log(results)

    //agent.add(new Card({
        //           title: 'Title: this is a card title',
        //           imageUrl: 'https://developers.google.com/actions/assistant.png',
        //           text: 'This is the body text of a card.  You can even use line\n  breaks and emoji! 💁',
        //           buttonText: 'This is a button',
        //           buttonUrl: 'https://assistant.google.com/'
        //         })
    //list of different pizza and toppings
    

module.exports = app;