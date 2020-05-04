"use strict";
// function dataOmzet() {
// 	let result = fetch("../pizzalist.json")
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
        
//            data(newResults)
//         }) 
// // }	

fetch("../pizzalist.json")
    .then(function(resp){
    return resp.json();
    })
    .then(function(data) {
    console.log(data)
    });
// function dataOmzet() {s
// 	let result = fetch("../pizzalist.json")
// 	let newResults = [];
// //	let result = fetch("/pizzalist.json")
// 		.then(data => data.json())
// 		.then(json => {
// 			return newResults = json.map(result => {
// 				return {
// 					pizza: result.pizzalist,
// 					price: result.price,
// 					img: result.img,
// 					contact: result.description
// 				}
//             })
        
//         //    data(newResults)
//         }) 
// }
// dataOmzet()
// console.log(newResults);

// // De opgehaalde data wordt omgezet tot een Json bestand.
// function runQuery(url, query) {
//     let result = fetch("../pizzalist.json")
//         .then(data => data.results.bindings)
//         .catch(error => {
//             console.log(error)
//         })
// }

// // De data wordt opgeschoond, zodat alleen de relevante data wordt weergegeven.
// function schoneData(data) {
//     return data.map(result => {
//         return {
//             wapentype: result.typeLabel.value,
//             continentLabel: result.continentLabel.value,
//             aantal: Number(result.choCount.value)
//         }
//     })
// }
//var Data = require('data');
//console.log(data)
// function data(results){
// console.log(results)
// }