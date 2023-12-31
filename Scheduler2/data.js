const data = [
    {
      text: 'Website Re-Design Plan',
      startDate: new Date('2021-03-29T16:30:00.000Z'),
      endDate: new Date('2021-03-29T18:30:00.000Z'),
    }, {
      text: 'Book Flights to San Fran for Sales Trip',
      startDate: new Date('2021-03-29T19:00:00.000Z'),
      endDate: new Date('2021-03-29T20:00:00.000Z'),
      allDay: true,
    }, {
      text: 'Install New Router in Dev Room',
      startDate: new Date('2021-03-29T21:30:00.000Z'),
      endDate: new Date('2021-03-29T22:30:00.000Z'),
    }, {
      text: 'Approve Personal Computer Upgrade Plan',
      startDate: new Date('2021-03-30T17:00:00.000Z'),
      endDate: new Date('2021-03-30T18:00:00.000Z'),
    }, {
      text: 'Final Budget Review',
      startDate: new Date('2021-03-30T19:00:00.000Z'),
      endDate: new Date('2021-03-30T20:35:00.000Z'),
    }, {
      text: 'New Brochures',
      startDate: new Date('2021-03-30T21:30:00.000Z'),
      endDate: new Date('2021-03-30T22:45:00.000Z'),
    }, {
      text: 'Install New Database',
      startDate: new Date('2021-03-31T16:45:00.000Z'),
      endDate: new Date('2021-03-31T18:15:00.000Z'),
    }, {
      text: 'Approve New Online Marketing Strategy',
      startDate: new Date('2021-03-31T19:00:00.000Z'),
      endDate: new Date('2021-03-31T21:00:00.000Z'),
    }, {
      text: 'Upgrade Personal Computers',
      startDate: new Date('2021-03-31T22:15:00.000Z'),
      endDate: new Date('2021-03-31T23:30:00.000Z'),
    }, {
      text: 'Customer Workshop',
      startDate: new Date('2021-04-01T18:00:00.000Z'),
      endDate: new Date('2021-04-01T19:00:00.000Z'),
      allDay: true,
    }, {
      text: 'Prepare 2021 Marketing Plan',
      startDate: new Date('2021-04-01T18:00:00.000Z'),
      endDate: new Date('2021-04-01T20:30:00.000Z'),
    }, {
      text: 'Brochure Design Review',
      startDate: new Date('2021-04-01T21:00:00.000Z'),
      endDate: new Date('2021-04-01T22:30:00.000Z'),
    }, {
      text: 'Create Icons for Website',
      startDate: new Date('2021-04-02T17:00:00.000Z'),
      endDate: new Date('2021-04-02T18:30:00.000Z'),
    }, {
      text: 'Upgrade Server Hardware',
      startDate: new Date('2021-04-02T21:30:00.000Z'),
      endDate: new Date('2021-04-02T23:00:00.000Z'),
    }, {
      text: 'Submit New Website Design',
      startDate: new Date('2021-04-02T23:30:00.000Z'),
      endDate: new Date('2021-04-03T01:00:00.000Z'),
    }, {
      text: 'Launch New Website',
      startDate: new Date('2021-04-02T19:20:00.000Z'),
      endDate: new Date('2021-04-02T21:00:00.000Z'),
    },
  ];
  const data2 = [
    {
      text: 'Website Re-Design Plan',
      assigneeId: 4,
      roomId: 1,
      priorityId: [2],
      startDate: new Date('2021-04-26T16:30:00.000Z'),
      endDate: new Date('2021-04-26T18:30:00.000Z'),
    }, {
      text: 'Book Flights to San Fran for Sales Trip',
      assigneeId: 2,
      roomId: 2,
      priorityId: [1],
      startDate: new Date('2021-04-26T19:00:00.000Z'),
      endDate: new Date('2021-04-26T20:00:00.000Z'),
      allDay: true,
    }, {
      text: 'Install New Router in Dev Room',
      assigneeId: 1,
      roomId: 1,
      priorityId: [2],
      startDate: new Date('2021-04-26T21:30:00.000Z'),
      endDate: new Date('2021-04-26T22:30:00.000Z'),
    }, {
      text: 'Approve Personal Computer Upgrade Plan',
      assigneeId: 3,
      roomId: 2,
      priorityId: [2],
      startDate: new Date('2021-04-27T17:00:00.000Z'),
      endDate: new Date('2021-04-27T18:00:00.000Z'),
    }, {
      text: 'Final Budget Review',
      assigneeId: 1,
      roomId: 1,
      priorityId: [1],
      startDate: new Date('2021-04-27T19:00:00.000Z'),
      endDate: new Date('2021-04-27T20:35:00.000Z'),
    }, {
      text: 'New Brochures',
      assigneeId: 4,
      roomId: 3,
      priorityId: [2],
      startDate: new Date('2021-04-27T21:30:00.000Z'),
      endDate: new Date('2021-04-27T22:45:00.000Z'),
    }, {
      text: 'Install New Database',
      assigneeId: 2,
      roomId: 3,
      priorityId: [1],
      startDate: new Date('2021-04-28T16:45:00.000Z'),
      endDate: new Date('2021-04-28T18:15:00.000Z'),
    }, {
      text: 'Approve New Online Marketing Strategy',
      assigneeId: 4,
      roomId: 2,
      priorityId: [1],
      startDate: new Date('2021-04-28T19:00:00.000Z'),
      endDate: new Date('2021-04-28T21:00:00.000Z'),
    }, {
      text: 'Upgrade Personal Computers',
      assigneeId: 2,
      roomId: 2,
      priorityId: [2],
      startDate: new Date('2021-04-28T22:15:00.000Z'),
      endDate: new Date('2021-04-28T23:30:00.000Z'),
    }, {
      text: 'Customer Workshop',
      assigneeId: 3,
      roomId: 3,
      priorityId: [1],
      startDate: new Date('2021-04-29T18:00:00.000Z'),
      endDate: new Date('2021-04-29T19:00:00.000Z'),
      allDay: true,
    }, {
      text: 'Prepare 2021 Marketing Plan',
      assigneeId: 1,
      roomId: 1,
      priorityId: [2],
      startDate: new Date('2021-04-29T18:00:00.000Z'),
      endDate: new Date('2021-04-29T20:30:00.000Z'),
    }, {
      text: 'Brochure Design Review',
      assigneeId: 4,
      roomId: 1,
      priorityId: [1],
      startDate: new Date('2021-04-29T21:00:00.000Z'),
      endDate: new Date('2021-04-29T22:30:00.000Z'),
    }, {
      text: 'Create Icons for Website',
      assigneeId: 3,
      roomId: 3,
      priorityId: [1],
      startDate: new Date('2021-04-30T17:00:00.000Z'),
      endDate: new Date('2021-04-30T18:30:00.000Z'),
    }, {
      text: 'Upgrade Server Hardware',
      assigneeId: 4,
      roomId: 2,
      priorityId: [2],
      startDate: new Date('2021-04-30T21:30:00.000Z'),
      endDate: new Date('2021-04-30T23:00:00.000Z'),
    }, {
      text: 'Submit New Website Design',
      assigneeId: 1,
      roomId: 1,
      priorityId: [2],
      startDate: new Date('2021-04-30T23:30:00.000Z'),
      endDate: new Date('2021-05-01T01:00:00.000Z'),
    }, {
      text: 'Launch New Website',
      assigneeId: 2,
      roomId: 3,
      priorityId: [1],
      startDate: new Date('2021-04-30T19:20:00.000Z'),
      endDate: new Date('2021-04-30T21:00:00.000Z'),
    },
  ];
  
  const resourcesList = ['Assignee', 'Room', 'Priority'];
  const assignees = [
    {
      text: 'Samantha Bright',
      id: 1,
      color: '#727bd2',
    }, {
      text: 'John Heart',
      id: 2,
      color: '#32c9ed',
    }, {
      text: 'Todd Hoffman',
      id: 3,
      color: '#2a7ee4',
    }, {
      text: 'Sandra Johnson',
      id: 4,
      color: '#7b49d3',
    },
  ];
  
  const rooms = [
    {
      text: 'Room 1',
      id: 1,
      color: '#00af2c',
    }, {
      text: 'Room 2',
      id: 2,
      color: '#56ca85',
    }, {
      text: 'Room 3',
      id: 3,
      color: '#8ecd3c',
    },
  ];
  
  const priorities = [
    {
      text: 'High',
      id: 1,
    }, {
      text: 'Low',
      id: 2,
    },
  ];
  
  const moviesData = [{
    id: 1,
    text: 'His Girl Friday',
    director: 'Howard Hawks',
    year: 1940,
    image: 'images/movies/HisGirlFriday.jpg',
    duration: 92,
    color: '#cb6bb2',
  }, {
    id: 2,
    text: 'Royal Wedding',
    director: 'Stanley Donen',
    year: 1951,
    image: 'images/movies/RoyalWedding.jpg',
    duration: 93,
    color: '#56ca85',
  }, {
    id: 3,
    text: 'A Star Is Born',
    director: 'William A. Wellman',
    year: 1937,
    image: 'images/movies/AStartIsBorn.jpg',
    duration: 111,
    color: '#1e90ff',
  }, {
    id: 4,
    text: 'The Screaming Skull',
    director: 'Alex Nicol',
    year: 1958,
    image: 'images/movies/ScreamingSkull.jpg',
    duration: 68,
    color: '#ff9747',
  }, {
    id: 5,
    text: "It's a Wonderful Life",
    director: 'Frank Capra',
    year: 1946,
    image: 'images/movies/ItsAWonderfulLife.jpg',
    duration: 130,
    color: '#f05797',
  }, {
    id: 6,
    text: 'City Lights',
    director: 'Charlie Chaplin',
    year: 1931,
    image: 'images/movies/CityLights.jpg',
    duration: 87,
    color: '#2a9010',
  }];
  
  const theatreData = [{
    text: 'Cinema Hall 1',
    id: 0,
  }, {
    text: 'Cinema Hall 2',
    id: 1,
  },
  ];
  
  const data3 = [{
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-04-26T16:10:00.000Z'),
    endDate: new Date('2021-04-26T18:01:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-26T18:30:00.000Z'),
    endDate: new Date('2021-04-26T20:02:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 15,
    startDate: new Date('2021-04-26T20:30:00.000Z'),
    endDate: new Date('2021-04-26T22:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-26T23:00:00.000Z'),
    endDate: new Date('2021-04-27T00:08:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 10,
    startDate: new Date('2021-04-27T00:30:00.000Z'),
    endDate: new Date('2021-04-27T02:03:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 10,
    startDate: new Date('2021-04-27T02:30:00.000Z'),
    endDate: new Date('2021-04-27T04:02:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 10,
    startDate: new Date('2021-04-27T04:20:00.000Z'),
    endDate: new Date('2021-04-27T05:53:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-04-27T16:10:00.000Z'),
    endDate: new Date('2021-04-27T18:20:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-27T19:00:00.000Z'),
    endDate: new Date('2021-04-27T20:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 5,
    startDate: new Date('2021-04-27T21:00:00.000Z'),
    endDate: new Date('2021-04-27T22:51:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-27T23:20:00.000Z'),
    endDate: new Date('2021-04-28T00:28:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 10,
    startDate: new Date('2021-04-28T01:00:00.000Z'),
    endDate: new Date('2021-04-28T02:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 15,
    startDate: new Date('2021-04-28T03:00:00.000Z'),
    endDate: new Date('2021-04-28T04:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-28T04:50:00.000Z'),
    endDate: new Date('2021-04-28T05:58:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-28T16:00:00.000Z'),
    endDate: new Date('2021-04-28T17:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-28T18:00:00.000Z'),
    endDate: new Date('2021-04-28T19:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-04-28T20:20:00.000Z'),
    endDate: new Date('2021-04-28T22:11:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-04-28T22:45:00.000Z'),
    endDate: new Date('2021-04-29T00:55:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 10,
    startDate: new Date('2021-04-29T01:20:00.000Z'),
    endDate: new Date('2021-04-29T02:28:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 20,
    startDate: new Date('2021-04-29T03:00:00.000Z'),
    endDate: new Date('2021-04-29T05:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-29T16:00:00.000Z'),
    endDate: new Date('2021-04-29T17:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-29T18:00:00.000Z'),
    endDate: new Date('2021-04-29T19:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-04-29T20:20:00.000Z'),
    endDate: new Date('2021-04-29T22:11:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-04-29T22:45:00.000Z'),
    endDate: new Date('2021-04-30T00:55:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-30T01:20:00.000Z'),
    endDate: new Date('2021-04-30T02:28:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-04-30T03:00:00.000Z'),
    endDate: new Date('2021-04-30T05:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-30T16:30:00.000Z'),
    endDate: new Date('2021-04-30T18:03:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-30T18:30:00.000Z'),
    endDate: new Date('2021-04-30T20:02:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 5,
    startDate: new Date('2021-04-30T20:30:00.000Z'),
    endDate: new Date('2021-04-30T22:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-04-30T23:00:00.000Z'),
    endDate: new Date('2021-05-01T01:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-05-01T01:30:00.000Z'),
    endDate: new Date('2021-05-01T02:38:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 15,
    startDate: new Date('2021-05-01T03:20:00.000Z'),
    endDate: new Date('2021-05-01T05:11:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-01T16:30:00.000Z'),
    endDate: new Date('2021-05-01T18:03:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 10,
    startDate: new Date('2021-05-01T18:30:00.000Z'),
    endDate: new Date('2021-05-01T20:02:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-01T20:30:00.000Z'),
    endDate: new Date('2021-05-01T22:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-01T23:00:00.000Z'),
    endDate: new Date('2021-05-02T01:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 10,
    startDate: new Date('2021-05-02T01:30:00.000Z'),
    endDate: new Date('2021-05-02T02:38:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-02T03:20:00.000Z'),
    endDate: new Date('2021-05-02T05:11:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-02T16:30:00.000Z'),
    endDate: new Date('2021-05-02T18:03:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-02T18:30:00.000Z'),
    endDate: new Date('2021-05-02T20:02:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-02T20:30:00.000Z'),
    endDate: new Date('2021-05-02T22:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-02T23:00:00.000Z'),
    endDate: new Date('2021-05-03T01:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 10,
    startDate: new Date('2021-05-03T01:30:00.000Z'),
    endDate: new Date('2021-05-03T02:38:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 15,
    startDate: new Date('2021-05-03T03:20:00.000Z'),
    endDate: new Date('2021-05-03T05:11:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-03T16:30:00.000Z'),
    endDate: new Date('2021-05-03T18:03:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-03T18:30:00.000Z'),
    endDate: new Date('2021-05-03T19:57:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-03T20:20:00.000Z'),
    endDate: new Date('2021-05-03T22:11:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-03T23:00:00.000Z'),
    endDate: new Date('2021-05-04T00:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 10,
    startDate: new Date('2021-05-04T01:00:00.000Z'),
    endDate: new Date('2021-05-04T02:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 20,
    startDate: new Date('2021-05-04T03:00:00.000Z'),
    endDate: new Date('2021-05-04T04:27:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 4,
    price: 15,
    startDate: new Date('2021-05-04T04:50:00.000Z'),
    endDate: new Date('2021-05-04T05:58:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-05T02:00:00.000Z'),
    endDate: new Date('2021-05-04T17:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-04T18:30:00.000Z'),
    endDate: new Date('2021-05-04T20:03:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-04T20:30:00.000Z'),
    endDate: new Date('2021-05-04T22:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-04T22:30:00.000Z'),
    endDate: new Date('2021-05-05T00:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-05T00:30:00.000Z'),
    endDate: new Date('2021-05-05T01:57:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-05T03:00:00.000Z'),
    endDate: new Date('2021-05-05T05:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-06T02:00:00.000Z'),
    endDate: new Date('2021-05-05T17:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-06T04:00:00.000Z'),
    endDate: new Date('2021-05-06T05:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-05T20:00:00.000Z'),
    endDate: new Date('2021-05-05T21:51:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-05T22:30:00.000Z'),
    endDate: new Date('2021-05-06T00:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-06T00:30:00.000Z'),
    endDate: new Date('2021-05-06T01:57:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-06T03:00:00.000Z'),
    endDate: new Date('2021-05-06T05:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-06T16:00:00.000Z'),
    endDate: new Date('2021-05-06T17:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-06T18:00:00.000Z'),
    endDate: new Date('2021-05-06T19:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-06T20:00:00.000Z'),
    endDate: new Date('2021-05-06T21:51:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-06T22:30:00.000Z'),
    endDate: new Date('2021-05-07T00:21:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-07T00:30:00.000Z'),
    endDate: new Date('2021-05-07T01:57:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-07T03:00:00.000Z'),
    endDate: new Date('2021-05-07T05:10:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-07T16:00:00.000Z'),
    endDate: new Date('2021-05-07T17:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-07T18:00:00.000Z'),
    endDate: new Date('2021-05-07T19:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-07T20:00:00.000Z'),
    endDate: new Date('2021-05-07T21:51:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-07T22:30:00.000Z'),
    endDate: new Date('2021-05-08T00:40:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-08T01:00:00.000Z'),
    endDate: new Date('2021-05-08T02:27:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 15,
    startDate: new Date('2021-05-08T03:00:00.000Z'),
    endDate: new Date('2021-05-08T04:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-08T16:00:00.000Z'),
    endDate: new Date('2021-05-08T17:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-08T18:00:00.000Z'),
    endDate: new Date('2021-05-08T19:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-08T20:00:00.000Z'),
    endDate: new Date('2021-05-08T21:51:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-08T22:30:00.000Z'),
    endDate: new Date('2021-05-09T00:40:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-09T01:00:00.000Z'),
    endDate: new Date('2021-05-09T02:27:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 15,
    startDate: new Date('2021-05-09T03:00:00.000Z'),
    endDate: new Date('2021-05-09T04:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-09T16:00:00.000Z'),
    endDate: new Date('2021-05-09T17:33:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-09T18:00:00.000Z'),
    endDate: new Date('2021-05-09T19:32:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-09T20:00:00.000Z'),
    endDate: new Date('2021-05-09T21:51:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-09T22:30:00.000Z'),
    endDate: new Date('2021-05-10T00:40:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-10T01:00:00.000Z'),
    endDate: new Date('2021-05-10T02:27:00.000Z'),
  }, {
    theatreId: 0,
    movieId: 1,
    price: 15,
    startDate: new Date('2021-05-10T03:00:00.000Z'),
    endDate: new Date('2021-05-10T04:32:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-04-27T02:30:00.000Z'),
    endDate: new Date('2021-04-26T18:21:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-26T19:00:00.000Z'),
    endDate: new Date('2021-04-26T20:32:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 15,
    startDate: new Date('2021-04-26T21:00:00.000Z'),
    endDate: new Date('2021-04-26T22:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-26T23:10:00.000Z'),
    endDate: new Date('2021-04-27T00:18:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 10,
    startDate: new Date('2021-04-27T00:30:00.000Z'),
    endDate: new Date('2021-04-27T02:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 10,
    startDate: new Date('2021-04-26T16:30:00.000Z'),
    endDate: new Date('2021-04-27T04:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 10,
    startDate: new Date('2021-04-27T04:20:00.000Z'),
    endDate: new Date('2021-04-27T05:53:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-27T16:30:00.000Z'),
    endDate: new Date('2021-04-27T18:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-27T18:30:00.000Z'),
    endDate: new Date('2021-04-27T20:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-04-27T20:30:00.000Z'),
    endDate: new Date('2021-04-27T22:40:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-27T23:00:00.000Z'),
    endDate: new Date('2021-04-28T00:08:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 10,
    startDate: new Date('2021-04-28T00:30:00.000Z'),
    endDate: new Date('2021-04-28T02:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 15,
    startDate: new Date('2021-04-28T02:40:00.000Z'),
    endDate: new Date('2021-04-28T04:13:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-28T04:40:00.000Z'),
    endDate: new Date('2021-04-28T05:48:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-28T16:30:00.000Z'),
    endDate: new Date('2021-04-28T18:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-28T18:30:00.000Z'),
    endDate: new Date('2021-04-28T20:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-04-28T20:30:00.000Z'),
    endDate: new Date('2021-04-28T22:41:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-04-28T23:00:00.000Z'),
    endDate: new Date('2021-04-29T01:10:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 10,
    startDate: new Date('2021-04-29T01:30:00.000Z'),
    endDate: new Date('2021-04-29T02:38:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 20,
    startDate: new Date('2021-04-29T03:20:00.000Z'),
    endDate: new Date('2021-04-29T05:30:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-29T16:30:00.000Z'),
    endDate: new Date('2021-04-29T18:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-29T18:30:00.000Z'),
    endDate: new Date('2021-04-29T20:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-04-29T20:30:00.000Z'),
    endDate: new Date('2021-04-29T22:41:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-04-29T23:00:00.000Z'),
    endDate: new Date('2021-04-30T01:10:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-04-30T01:30:00.000Z'),
    endDate: new Date('2021-04-30T02:38:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-04-30T03:20:00.000Z'),
    endDate: new Date('2021-04-30T05:30:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-04-30T16:10:00.000Z'),
    endDate: new Date('2021-04-30T17:43:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-04-30T18:00:00.000Z'),
    endDate: new Date('2021-04-30T19:32:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 5,
    startDate: new Date('2021-04-30T20:10:00.000Z'),
    endDate: new Date('2021-04-30T22:01:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-04-30T22:40:00.000Z'),
    endDate: new Date('2021-05-01T00:50:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 5,
    startDate: new Date('2021-05-01T01:20:00.000Z'),
    endDate: new Date('2021-05-01T02:28:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 15,
    startDate: new Date('2021-05-01T03:20:00.000Z'),
    endDate: new Date('2021-05-01T05:11:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-01T17:00:00.000Z'),
    endDate: new Date('2021-05-01T18:33:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 10,
    startDate: new Date('2021-05-01T19:00:00.000Z'),
    endDate: new Date('2021-05-01T20:32:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-01T21:00:00.000Z'),
    endDate: new Date('2021-05-01T22:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-01T23:30:00.000Z'),
    endDate: new Date('2021-05-02T01:40:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 10,
    startDate: new Date('2021-05-02T02:00:00.000Z'),
    endDate: new Date('2021-05-02T03:08:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 20,
    startDate: new Date('2021-05-02T03:30:00.000Z'),
    endDate: new Date('2021-05-02T05:50:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-02T17:00:00.000Z'),
    endDate: new Date('2021-05-02T18:33:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-02T19:00:00.000Z'),
    endDate: new Date('2021-05-02T20:32:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-02T21:00:00.000Z'),
    endDate: new Date('2021-05-02T22:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-02T23:30:00.000Z'),
    endDate: new Date('2021-05-03T01:40:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 4,
    price: 10,
    startDate: new Date('2021-05-03T02:00:00.000Z'),
    endDate: new Date('2021-05-03T03:08:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-03T03:30:00.000Z'),
    endDate: new Date('2021-05-03T05:50:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-03T17:00:00.000Z'),
    endDate: new Date('2021-05-03T18:33:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-03T19:00:00.000Z'),
    endDate: new Date('2021-05-03T20:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-03T21:00:00.000Z'),
    endDate: new Date('2021-05-03T22:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 10,
    startDate: new Date('2021-05-03T23:30:00.000Z'),
    endDate: new Date('2021-05-04T01:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-04T01:30:00.000Z'),
    endDate: new Date('2021-05-04T03:40:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 20,
    startDate: new Date('2021-05-04T04:00:00.000Z'),
    endDate: new Date('2021-05-04T05:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-04T16:30:00.000Z'),
    endDate: new Date('2021-05-04T18:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 5,
    startDate: new Date('2021-05-04T19:00:00.000Z'),
    endDate: new Date('2021-05-04T20:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-04T21:00:00.000Z'),
    endDate: new Date('2021-05-04T22:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-04T23:30:00.000Z'),
    endDate: new Date('2021-05-05T01:21:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-04T16:00:00.000Z'),
    endDate: new Date('2021-05-05T03:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 15,
    startDate: new Date('2021-05-05T04:00:00.000Z'),
    endDate: new Date('2021-05-05T05:33:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-05T17:00:00.000Z'),
    endDate: new Date('2021-05-05T18:32:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 5,
    startDate: new Date('2021-05-05T19:00:00.000Z'),
    endDate: new Date('2021-05-05T20:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-05T21:00:00.000Z'),
    endDate: new Date('2021-05-05T22:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 10,
    startDate: new Date('2021-05-05T23:30:00.000Z'),
    endDate: new Date('2021-05-06T01:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-05T16:00:00.000Z'),
    endDate: new Date('2021-05-06T03:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 15,
    startDate: new Date('2021-05-05T18:00:00.000Z'),
    endDate: new Date('2021-05-05T19:33:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-06T16:30:00.000Z'),
    endDate: new Date('2021-05-06T18:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-06T18:30:00.000Z'),
    endDate: new Date('2021-05-06T20:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 10,
    startDate: new Date('2021-05-06T21:00:00.000Z'),
    endDate: new Date('2021-05-06T22:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-06T23:00:00.000Z'),
    endDate: new Date('2021-05-07T00:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-07T01:10:00.000Z'),
    endDate: new Date('2021-05-07T02:37:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 20,
    startDate: new Date('2021-05-07T03:30:00.000Z'),
    endDate: new Date('2021-05-07T05:40:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-07T16:30:00.000Z'),
    endDate: new Date('2021-05-07T18:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-07T18:30:00.000Z'),
    endDate: new Date('2021-05-07T20:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 10,
    startDate: new Date('2021-05-07T21:00:00.000Z'),
    endDate: new Date('2021-05-07T22:27:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-07T23:00:00.000Z'),
    endDate: new Date('2021-05-08T00:51:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-08T01:10:00.000Z'),
    endDate: new Date('2021-05-08T02:37:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 15,
    startDate: new Date('2021-05-08T03:20:00.000Z'),
    endDate: new Date('2021-05-08T05:30:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-08T16:30:00.000Z'),
    endDate: new Date('2021-05-08T18:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-08T18:30:00.000Z'),
    endDate: new Date('2021-05-08T20:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-08T20:30:00.000Z'),
    endDate: new Date('2021-05-08T22:21:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-08T23:00:00.000Z'),
    endDate: new Date('2021-05-09T01:10:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-09T01:30:00.000Z'),
    endDate: new Date('2021-05-09T02:57:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 15,
    startDate: new Date('2021-05-09T03:30:00.000Z'),
    endDate: new Date('2021-05-09T05:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 2,
    price: 5,
    startDate: new Date('2021-05-09T16:30:00.000Z'),
    endDate: new Date('2021-05-09T18:03:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 5,
    startDate: new Date('2021-05-09T18:30:00.000Z'),
    endDate: new Date('2021-05-09T20:02:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 3,
    price: 10,
    startDate: new Date('2021-05-09T20:30:00.000Z'),
    endDate: new Date('2021-05-09T22:21:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 5,
    price: 10,
    startDate: new Date('2021-05-09T23:00:00.000Z'),
    endDate: new Date('2021-05-10T01:10:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 6,
    price: 15,
    startDate: new Date('2021-05-10T01:30:00.000Z'),
    endDate: new Date('2021-05-10T02:57:00.000Z'),
  }, {
    theatreId: 1,
    movieId: 1,
    price: 15,
    startDate: new Date('2021-05-10T03:30:00.000Z'),
    endDate: new Date('2021-05-10T05:02:00.000Z'),
  },
  ];