import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  startDate: DS.attr(),
  endDate: DS.attr(),
  banding: DS.attr()
});
