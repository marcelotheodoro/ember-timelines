import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['timeline-handles'],
  min: 1,
  max: 100,
  mood: 'info',

  init() {
    this._super(...arguments);
    
    this.updateResults(1, 100);
  },

  actions: {
    handleChanged(positions) {
      this.updateResults(positions[0], positions[1]);
    }
  },

  updateResults(startPosition, endPosition) {
    let {startDate, endDate} = this.getDates(startPosition, endPosition);
    this.setResults(startDate, endDate);
  },

  setResults(startDate, endDate) {
    let filterAction = this.get('filter');
    filterAction(startDate, endDate).then((filteredResults) => this.set('results', filteredResults));
  },

  getDates(start, end) {
    const dailyRatio = 100 / this.get('timeline').length;
    
    const startPosition = parseInt((start-1) / dailyRatio);
    const endPosition = parseInt((end-1) / dailyRatio);

    const startDate = this.get('timeline')[startPosition].date;
    const endDate = this.get('timeline')[endPosition].date;

    return {startDate, endDate};
  }
});
