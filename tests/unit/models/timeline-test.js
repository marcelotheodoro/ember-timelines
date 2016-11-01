import { moduleFor, test } from 'ember-qunit';

let tasks = [
  {
    id: 1,
    name: "UI Review",
    startDate: "2016-02-12",
    endDate: "2016-02-12"
  },
  {
    id: 2,
    name: "Sprint Planning",
    startDate: "2016-02-18",
    endDate: "2016-02-18"
  },
  {
    id: 3,
    name: "Task Breakdown",
    startDate: "2016-02-12",
    endDate: "2016-02-15",
    banding: "red"
  },
  {
    id: 4,
    name: "Execution",
    startDate: "2016-02-17",
    endDate: "2016-02-19",
    banding: "orange"
  }
];

moduleFor('model:timeline', 'Unit | timeline', {
  unit: true
});

test('should build asDays', function(assert) {
  const timeline = this.subject();
  timeline.set('tasks', tasks);

  let expectedDays = [
    {date: "2016-02-12", banding: "red", milestones: [
      {
        id: 1,
        name: "UI Review",
        endDate: "2016-02-12",
        startDate: "2016-02-12"
      }]
    },
    {date: "2016-02-13", banding: "red", milestones: []},
    {date: "2016-02-14", banding: "red", milestones: []},
    {date: "2016-02-15", banding: "red", milestones: []},
    {date: "2016-02-16", banding: null, milestones: []},
    {date: "2016-02-17", banding: "orange", milestones: []},
    {date: "2016-02-18", banding: "orange", milestones: [
      {
        id: 2,
        name: "Sprint Planning",
        startDate: "2016-02-18",
        endDate: "2016-02-18"
      }
    ]},
    {date: "2016-02-19", banding: "orange", milestones: []}
  ];

  assert.deepEqual(timeline.asDays(), expectedDays);
}); 