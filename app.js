const {
    dialogflow
} = require('actions-on-google');

const app = dialogflow();

app.intent('Default Welcome Intent', (conv) => {
    conv.ask("Hi! Welcome to this pizza restaurant, what would you like to order?")
})

app.intent('list', (conv) => {
    conv.ask("We have this pizza's available")
    //list of different pizza and toppings
})

module.exports = app;