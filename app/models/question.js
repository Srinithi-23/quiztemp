import DS from 'ember-data';

export default DS.Model.extend({
  key:DS.attr('number'),
  name: DS.attr('string'),
  correct_ans:DS.attr('string'),
  ans:DS.attr(),
  user_ans:DS.attr('string'),
  isCorrect:DS.attr('boolean')
});
