
const {
    dialogflow, List, SimpleResponse, BasicCard, Image, Button,
} = require('actions-on-google');
// Import the appropriate class
const { WebhookClient } = require('dialogflow-fulfillment');
 //Create an instance
//const agent = new WebhookClient({request: request, response: response});
const { Text, Card, Suggestion, Payload } = require('dialogflow-fulfillment');
// const { 
//     BasicCard,
//     actionsOnGoogle} = require('actions-on-google');

const fetch = require("node-fetch"); 
const app = dialogflow();


//import { SimpleResponse } from `actions-on-google`
//----- AB test
const experimentId = "-e8f2ocGS8O0G2MJU-kzYg";
let variationId =  Math.floor((Math.random() * 2))
//let variationId = Math.floor.(Math.random()*2); //0-2

// //DATA OPHALEN
// let result = fetch("pizzalist.json")
// //	let result = fetch("/pizzalist.json")
// 		.then(data => data.json())
// 		.then(json => {
// 			const newResults = json.map(result => {
// 				return {
// 					pizza: result.pizzalist,
// 					price: result.price,
// 					img: result.img,
// 					contact: result.description
// 				}
//             })
//             console.log(newResults)
//         }) 


app.intent('Default Welcome Intent', (conv) => {
    conv.ask("Hi! Welcome to this pizza restaurant, what would you like to order?")
    console.log(experimentId);
    console.log(variationId);
})

app.intent('list', (conv) => {
    //agent.add("text")
      conv.ask("Here is a list with all the pizza's we have available:");
      conv.ask(new BasicCard({
        text: "Some text",
        title: "Some title",
          image: new Image({
            url: "some_image_url",
            alt: "Some alternative text",
          }),
      }));
     // console.log(data)
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