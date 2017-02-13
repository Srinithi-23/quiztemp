import Ember from 'ember';

export default Ember.Controller.extend({

  score: function() {
  var remark;
  var scr = this.store.peekAll('question');
  var scr_res=scr.filterBy('isCorrect', true);
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
}.property('@each.isCorrect'),


isAnswered: function(){
  var answered=this.store.peekAll('question');
  var answered_c=answered.filterBy('user_ans',undefined);
  console.log(answered_c.length);
  return answered_c.length;

}.property('@each.user_ans')
});
