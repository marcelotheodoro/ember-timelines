import Ember from 'ember';
import moment from 'moment';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  actions: {
    filterByDateRange(startDate, endDate) {
      let model = this.get('model');

      return new Ember.RSVP.Promise(function(resolve) {
        let filtered = _.filter(model, function(t) {
          return moment(t.date).isBetween(startDate, endDate, null, '[]');
        });
        resolve(filtered);
      });
    }
  }
});
