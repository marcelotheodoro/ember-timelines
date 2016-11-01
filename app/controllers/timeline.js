import Ember from 'ember';
import Timeline from '../models/timeline';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  actions: {
    filterByDateRange(startDate, endDate) {
      var self = this;

      return new Ember.RSVP.Promise(function(resolve) {
        self.store.query('task', { startDate: startDate, endDate: endDate }).then(function(_tasks) {
          let tasks = _.map(_tasks.content, function(t) {
            return _.clone(t._data);
          });

          resolve(Timeline.create({tasks: tasks}).asDays());
        });
      });
    }
  }
});
