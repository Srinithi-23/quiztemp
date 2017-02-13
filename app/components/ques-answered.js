import Ember from 'ember';

export default Ember.Component.extend({
correct:Ember.computed('user_ans','correct_ans',function(){
  console.log(this.get('user_ans'));
  if(this.get('user_ans')===this.get('correct_ans')){
    return 1;
    }
    else{
      return 0;
    }
})
});
