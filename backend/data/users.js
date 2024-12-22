import bycrptjs from 'bcryptjs';

const users = [

  {
    name: 'Rohith',
    email: 'rohith@email.com',
    password: bycrptjs.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'jhon@email.com',
    password: bycrptjs.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bycrptjs.hashSync('123456', 10),
    isAdmin: false,
  },
];