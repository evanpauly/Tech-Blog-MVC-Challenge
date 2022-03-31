const { Post } = require('../models');

const postdata = [
{
    title: 'TEST POST 1',
    post_url: 'https://testurl.test',
    user_id: 1
}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;