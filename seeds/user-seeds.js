const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
{
    username: 'testuser',
    email: 'testuser@test.com',
    password: 'password123'
},
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;