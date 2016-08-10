var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = Router.DefaultRoute;

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');

var routes = (
    <Route component={APP}>
        <DefaultRoute component={Audience} />
        <Route name="speaker" path="speaker" component={Speaker}></Route>
        <Route name="board" path="board" component={Board}></Route>
    </Route>
  );

// Router.run(routes, function(Handler){
//   ReactDOM.render(<Handler />, document.getElementById('react-container'));
// });

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('react-container'));






//So later we may change the var routes since we want to use the new 2shoes front-page, the default is set to audience right now. 