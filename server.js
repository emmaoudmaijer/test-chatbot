'use strict';

const {WebhookClient} = require('dialogflow-fulfillment');
const express = require('express')
const bodyParser = require('body-parser')

const app = require('./app')

const myApp = express().use(bodyParser.json());
myApp.use(express.static(__dirname + '/public'));
//const fs = require('fs');
//const http = require('http');
///const util = require('util');
//const getBot = require('./index.bot');
//const { getStore, postStore, getStoreGroup } = require('./index.store');
//const getLog = require('./index.log');
function WebhookProcessing(req, res) {
  const agent = new WebhookClient({request: req, response: res});

  console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(req.body));

  console.log(JSON.stringify(req.body.queryResult.queryText));
  console.log(JSON.stringify(req.body.queryResult.fulfillmentText));

}
myApp.use(bodyParser.json());
myApp.use(bodyParser.urlencoded({extended: true}));

myApp.get('/', (req,res) => {
  //res.send('the connection was succesful')
  res.render('index.html');
})

// myApp.get('/pizzalist', (req,res) => {
//   //res.send('the connection was succesful')
//   res.render('pizzalist.json');
// })

myApp.post('/fulfillment', function (req, res) {
  WebhookProcessing(req, res);
});

// myApp.get('/public/*', (req, res) => {
// 	const requestUrl = req.url.substring(1);
// 	const ext = requestUrl.replace(/^.*(?=\.)/, '');
// 	const mime = mimetype[ext] || 'text/html';
// 	fs.readFile(requestUrl, (error, data) => {
// 		res.writeHead(200, {
// 			'Content-Type': mime
// 		});
// 		res.end(data);
// 	});
// });

myApp.post('/bot', (req, res) => {
	getBot(req, res);
});

// myApp.post('/store/:file', (req, res) => {
// 	postStore(req, res);
// });
// myApp.get('/store/:file', (req, res) => {
// 	getStore(req, res);
// });
// myApp.get('/store/:file/:group', (req, res) => {
// 	getStoreGroup(req, res);
// });

// myApp.get('/log/:stamp?', (req, res) => {
// 	getLog(req, res);
// });

myApp.post('/', app)

myApp.listen(process.env.PORT || 8000);


// const mimetype = {
// 	'.html': 'text/html',
// 	'.js': 'text/javascript',
// 	'.css': 'text/css',
// 	'.txt': 'text/plain',
// 	'.jpg': 'image/jpeg',
// 	'.gif': 'image/gif',
// 	'.bmp': 'image/bmp',
// 	'.png': 'image/png',
// 	'.svg': 'image/svg+xml',
// 	'.ico': 'image/x-icon',
// 	'.ttf': 'application/x-font-ttf',
// 	'.woff': 'application/x-font-woff',
// 	'.woff2': 'text/plain',
// 	'.fon': 'application/octet-stream',
// 	'.ogv': 'application/ogg',
// 	'.wav': 'audio/mpeg',
// 	'.mp3': 'audio/mpeg',
// 	'.ogg': 'audio/ogg'
// };
// const out = process.stdout;

// myApp.use(bodyParser.urlencoded({
// 	extended: true
// }));
// myApp.use(bodyParser.json());

//process.env.TZ = 'Europe/Amsterdam';

// console.log = function () {
// 	const logColor = {
// 		_bright: '\x1b[0m\x1b[1m',
// 		_underscore: '\x1b[7m',
// 		_reset: '\x1b[0m',
// 		_red: '\x1b[31m',
// 		_green: '\x1b[32m',
// 		_yellow: '\x1b[33m',
// 		_blue: '\x1b[34m',
// 		_magenta: '\x1b[35m',
// 		_cyan: '\x1b[36m',
// 		_white: '\x1b[37m',
// 		_full: ''
// 	};
// 	const getCircularReplacer = () => {
// 		const seen = new WeakSet();
// 		return (key, value) => {
// 			if (typeof value === 'object' && value !== null) {
// 				if (seen.has(value)) {
// 					return '(_circular_)';
// 				}
// 				seen.add(value);
// 			}
// 			return value;
// 		};
// 	};
// 	const args = Object.values(arguments);
// 	const logText = [];
// 	let colThis = logColor._white;
// 	let spacesNum = 0;
// 	for (let a = 0; a < args.length; a++) {
// 		let text = args[a];
// 		if (Object.keys(logColor).indexOf(text) > -1) {
// 			colThis = logColor[text];
// 		} else {
// 			if (text && typeof text === 'object') {
// 				if (text.constructor === RegExp) {
// 					if (text.length) {
// 						text = String(JSON.stringify(text))
// 							.replace(/"([^"]*?)"/gm, logColor._yellow + '"$1"' + logColor._reset);
// 					} else {
// 						text = logColor._yellow + text + logColor._reset;
// 					}
// 				} else {
// 					const spaces = new Array(spacesNum + 1).join(' ');
// 					text = String(JSON.stringify(text, getCircularReplacer(), 2))
// 						.replace(/"\(_circular_\)"/gm, logColor._blue + '⟳ ' + logColor._reset)
// 						.replace(/"([^"]*?)": /gm, logColor._yellow + '$1' + logColor._reset + ': ')
// 						.replace(/: "(.*?)"(,?)$/gm, ': ' + logColor._green + '"$1"$2' + logColor._reset)
// 						.replace(/\n/g, `\n${spaces}`);
// 				}
// 			} else {
// 				spacesNum = (`${text}` || '').replace(/^(\s*).*?$/, '$1').length;
// 			}
// 			logText.push(`${colThis}${text}${logColor._reset}`);
// 		}
// 	}
// 	(function (text, logArgs) {
// 		setTimeout(() => {
// 			const newText = util.format(text.join(' ')) + '\n';
// 			fs.appendFileSync('./.log', util.format(newText));
// 			if (logArgs[0] !== '_full') {
// 				out.write(newText);
// 			}
// 		});
// 	}(logText, args));
// 	return true;
// };


