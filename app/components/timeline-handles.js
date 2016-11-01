import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  classNames: ['timeline-handles'],
  min: 1,
  mood: 'info',

  init() {
    this._super(...arguments);
    
    this.max = this.get('timeline').length;
    this.ticks = Array(_.range(1, this.max)).join(',');

    // this.get('filter')(null, null).then((results) => this.set('results', results));
  },

  actions: {
    handleChanged(positions) {
      const startDate = this.get('timeline')[positions[0]-1].date;
      const endDate = this.get('timeline')[positions[1]-1].date;

      let filterAction = this.get('filter');
      filterAction(startDate, endDate).then((filteredResults) => this.set('results', filteredResults));
    }
  }
});
