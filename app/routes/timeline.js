import Ember from 'ember';

let milestones = [
  {
    name: "UI Review",
    start: "2016-02-14",
    end: "2016-02-14"
  },
  {
    name: "Sprint Planning",
    start: "2016-03-07",
    end: "2016-03-07"
  },
  {
    name: "Task Breakdown",
    start: "2016-03-20",
    end: "2016-03-20"
  },
  {
    name: "Poker",
    start: "2016-03-21",
    end: "2016-03-21"
  },
];

export default Ember.Route.extend({
  model() {
    return milestones;
  }
});
