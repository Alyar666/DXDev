let s = 123456789;
const random = function () {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
};

const generateData = function (count) {
  let i;
  const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
  const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
  const gender = ['Male', 'Female'];
  const items = [];
  const startBirthDate = Date.parse('1/1/1975');
  const endBirthDate = Date.parse('1/1/1992');

  for (i = 0; i < count; i += 1) {
    const birthDate = new Date(startBirthDate + Math.floor(
      (random() * (endBirthDate - startBirthDate)) / 10,
    ));
    birthDate.setHours(12);

    const nameIndex = random();
    const item = {
      id: i + 1,
      firstName: names[nameIndex],
      lastName: surnames[random()],
      gender: gender[Math.floor(nameIndex / 5)],
      birthDate,
    };
    items.push(item);
  }
  return items;
};

const schedulerData = [
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

const chartData = [{
  arg: 1960,
  val: 3032019978,
}, {
  arg: 1970,
  val: 3683676306,
}, {
  arg: 1980,
  val: 4434021975,
}, {
  arg: 1990,
  val: 5281340078,
}, {
  arg: 2000,
  val: 6115108363,
}, {
  arg: 2010,
  val: 6922947261,
}, {
  arg: 2020,
  val: 7795000000,
}];

