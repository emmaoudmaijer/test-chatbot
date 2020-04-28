function dataOmzet() {
	let result = fetch("././pizzalist.json")
        .then(data => data.json())
        console.log(result)
}
dataOmzet()
console.log(result)

// module.export = data


function dataOmzet() {
	let result = fetch("pizzalist.json")
		.then(data => data.json())
		.then(json => {
			const newResults = json.map(result => {
				return {
					pizza: result.pizzalist,
					price: result.price,
					img: result.img,
					contact: result.description
				}
            })
        
           data(newResults)
        }) 
}

dataOmzet()
//var Data = require('data');
//console.log(data)
function data(results){
console.log(results)
}