import Ember from 'ember';

export default Ember.Controller.extend({

  score: function() {
  var remark;
  var scr = this.store.peekAll('question');
  var scr_res=scr.filterBy('isCorrect', true);
  console.log(scr_res.length);
  if(scr_res.length===10){
    remark='Excellent';
  }
  else if (scr_res.length<=3) {
    remark='Need to improve';
  }
  else if (scr_res.length<=7) {
    remark='Good';
  }
  else if (scr_res.length<10) {
    remark='Very Good';
  }
  return [scr_res.length,remark];
}.property('@each.isCorrect')


});
