const mongoDriver = require('mongodb');
const mongoClient = mongoDriver.MongoClient;

let users;
let messages;
let posts;

mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.log('Could not connect to mongodb');
    } else {
        let db = client.db("ClassFourExercises");
        users = db.collection('users')
        messages = db.collection('messages')
        posts = db.collection('posts')
    }
});

module.exports = {
  users: {},
  messages: {},
  posts: {},
}