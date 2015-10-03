var Fluxible = require('fluxible');
var Application = require('./components/Application');
var fetchr = require('fluxible-plugin-fetchr');
var fetchrInstance = fetchr({
    xhrPath: '/api'
});

// create new fluxible instance
var app = new Fluxible({
    component: Application
});

app.plug(fetchrInstance);

// register stores
app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/RouteStore'));

module.exports = app;
