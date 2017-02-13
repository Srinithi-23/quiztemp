import Ember from 'ember';

export default Ember.Controller.extend({
  score: function() {
  var scr = this.store.peekAll('question');
  var scr_res=scr.filterBy('isCorrect', true);
  return scr_res.length;
}.property('@each.isCorrect')

});
