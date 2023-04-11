const Model = require('./model');
const View = require('./view');
const Controller = require('./controller');

const data = { message: 'Lorem, ipsum dolor sit amet!' };
const model = new Model(data);
const view = new View(model);
const controller = new Controller(model, view);

controller.init();

