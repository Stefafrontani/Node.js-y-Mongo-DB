const mongoDriver = require('mongodb');
const mongoClient = mongoDriver.MongoClient;

let users;
let messages;
let posts;
let comments;

mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.log('Could not connect to mongodb');
    } else {
        let db = client.db("ClassFourExercises");
        users = db.collection('users')
        messages = db.collection('messages')
        posts = db.collection('posts')
        comments = db.collection('comments')
    }
});

function findUser(username, callback) {
  users.findOne({ username }, (err, user) => {
    if (user) {
      callback(null, user);
    } else {
      callback('User not found')
    }
  });
};

module.exports = {
  users: {},
  messages: {},
  posts: {},
  comments: {}
}