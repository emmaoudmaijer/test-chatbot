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
// }	
let newResults = [];
function dataOmzet() {
	let result = fetch("../pizzalist.json")
//	let result = fetch("/pizzalist.json")
		.then(data => data.json())
		.then(json => {
			newResults = json.map(result => {
				return {
					pizza: result.pizzalist,
					price: result.price,
					img: result.img,
					contact: result.description
				}
            })
        
        //    data(newResults)
        }) 
}
dataOmzet()
console.log(newResults);
//var Data = require('data');
//console.log(data)
function data(results){
console.log(results)
}