function dataOmzet() {
	let result = fetch("././pizzalist.json")
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
            let data = newResults
		})
}
dataOmzet()

module.export = data

