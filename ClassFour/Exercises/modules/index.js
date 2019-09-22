const mongoDriver = require('mongodb');
const mongoClient = mongoDriver.MongoClient;

let users;
let messages;

mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.log('Could not connect to mongodb');
    } else {
        let db = client.db("ClassFourExercises");
        users = db.collection('users')
        messages = db.collection('messages')
    }
});

module.exports = {
  users: {},
  messages: {},
}