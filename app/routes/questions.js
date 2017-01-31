import Ember from 'ember';

export default Ember.Route.extend({

model(param){
   return this.store.findRecord('question',param.quiz_id);

},

actions:{

  nextq:function(key){
    this.transitionTo('questions',(key+1));
},

  answer:function(model,option){
    let post = this.store.peekRecord('question', model.id);
    console.log('in post',post.id);
    post.set('user_ans',option);
    post.save();
    this.user_ans=option;
    var isCorrect=(post.get('user_ans')===post.get('correct_ans'));
    if(isCorrect){
    post.set('isCorrect',true);
  }
  else {
    post.set('isCorrect',false);
  }
}
}
});
