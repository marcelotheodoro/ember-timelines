export default function() {
  this.namespace = '/api';

  let tasks = [
    {
      id: 1,
      name: "UI Review",
      startDate: "2016-03-14",
      endDate: "2016-03-14"
    },
    {
      id: 2,
      name: "Sprint Planning",
      startDate: "2016-03-07",
      endDate: "2016-03-07"
    },
    {
      id: 3,
      name: "Task Breakdown",
      startDate: "2016-03-20",
      endDate: "2016-03-20"
    },
    {
      id: 4,
      name: "Poker",
      startDate: "2016-03-21",
      endDate: "2016-03-21"
    },
    {
      id: 5,
      name: "Architecture Review",
      startDate: "2016-03-16",
      endDate: "2016-03-16"
    },
    {
      id: 6,
      name: "Planning",
      startDate: "2016-03-07",
      endDate: "2016-03-13",
      banding: "red"
    },
    {
      id: 7,
      name: "Execution",
      startDate: "2016-03-20",
      endDate: "2016-03-21",
      banding: "orange"
    },
    {
      id: 10,
      name: "Code Review",
      startDate: "2016-03-08",
      endDate: "2016-03-08"
    },
    {
      id: 11,
      name: "Process Review",
      startDate: "2016-03-09",
      endDate: "2016-03-09"
    },
    {
      id: 12,
      name: "Mgmt Review",
      startDate: "2016-03-10",
      endDate: "2016-03-10"
    },
  ];

  this.get('/tasks', function() {
    return { tasks: tasks };
  });

}
