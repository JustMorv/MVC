class Controller{
	constructor(model,view){
		this.model =  model;
		this.view =  view;
	}
	init(){
		this.view.render()
	}
}
module.exports = Controller
