class View {
	constructor(model){
		this.model = model
	}

	render(){
		const data = this.model.getData()
		console.log(data)
	}
}

module.exports = View