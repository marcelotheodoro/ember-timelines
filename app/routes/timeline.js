import Ember from 'ember';
import Timeline from '../models/timeline';
import _ from 'lodash/lodash';

export default Ember.Route.extend({
  model() {
    var self = this;

    return new Ember.RSVP.Promise(function(resolve) {
      self.store.findAll('task').then(function(_tasks) {
        let tasks = _.map(_tasks.content, function(t) {
          return _.clone(t._data);
        });

        resolve(Timeline.create({tasks: tasks}).asDays());
      });
    });
  },
});
