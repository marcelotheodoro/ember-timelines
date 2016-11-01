import Ember from 'ember';
import moment from 'moment';
import _ from 'lodash/lodash';

export default Ember.Object.extend({
  tasks: [],

  asDays() {
    const startDate = this.getStartDate();
    const endDate = this.getEndDate();
    const days = this.dateRangeAsArray(startDate, endDate);

    const self = this;
    return _.map(days, function(day) {
      return {
        date: day, 
        banding: self.getBanding(day),
        milestones: self.getMilestones(day)
      };
    });
  },

  getBanding(day) {
    const phase = this.getFirstPhaseOfDay(day);
    if (!phase) {
      return null;
    }

    return phase.banding;
  },

  getMilestones(day) {
    return _.filter(this.tasks, function(t) { 
              return !t.banding && 
                day === t.startDate;
            });
  },

  getFirstPhaseOfDay(day) {
    return _.find(this.tasks, function(t) { 
              return !!t.banding && 
                moment(day).isBetween(t.startDate, t.endDate, null, '[]'); 
            });
  },

  dateRangeAsArray(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    while (currentDate <= moment(stopDate)) {
      dateArray.push( moment(currentDate).format('YYYY-MM-DD') );
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  },

  getStartDate() {
    return _(this.tasks)
              .map(function(t) { return moment(t.startDate); })
              .min()
              .format('YYYY-MM-DD');
  },

  getEndDate() {
    return _(this.tasks)
              .map(function(t) { return moment(t.endDate); })
              .max()
              .format('YYYY-MM-DD');
  }
  
});