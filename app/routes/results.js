import Ember from 'ember';

export default Ember.Route.extend({
actions:{
  reloading:function(){
    window.location.reload(true);
  }
}
});
