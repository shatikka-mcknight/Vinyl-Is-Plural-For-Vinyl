const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "martin_bour",
        email: "martin_b@gmail.com",
        password: "p@ssword1"
    },
    {
        id: 2,
        username: "matt_b",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        id: 3,
        username: "shaun_c",
        email: "shaun_c@gmail.com",
        password: "p@ssword3"
    },
    {
        id: 4,
        username: "lee_n",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },

    {
        id: 5,
        username: "pooja",
        email: "pooja@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;