import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results');
  this.route('questions',{path:'/questions/:quiz_id'});
  this.route('scores');
});

export default Router;
