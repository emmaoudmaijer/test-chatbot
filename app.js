const {
    dialogflow
} = require('actions-on-google');
const fetch = require("node-fetch"); 
const app = dialogflow();
//const b = require('public/scripts/index.js')
//const data = dataOmzet();

// function dataOmzet() {
// 	let result = fetch("pizzalist.json")
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
        
//            data(newResults)
//         }) 
// }

// dataOmzet()
// //var Data = require('data');
// //console.log(data)
// function data(results){
// console.log(results)
// }

app.intent('Default Welcome Intent', (conv) => {
    conv.ask("Hi! Welcome to this pizza restaurant, what would you like to order?")
})

app.intent('list', (conv) => {
    conv.ask("We have this pizza's available")
    //agent.add(new Card({
        //           title: 'Title: this is a card title',
        //           imageUrl: 'https://developers.google.com/actions/assistant.png',
        //           text: 'This is the body text of a card.  You can even use line\n  breaks and emoji! 💁',
        //           buttonText: 'This is a button',
        //           buttonUrl: 'https://assistant.google.com/'
        //         })
    //list of different pizza and toppings
})

module.exports = app;