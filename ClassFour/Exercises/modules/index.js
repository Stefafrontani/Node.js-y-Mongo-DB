const mongoDriver = require('mongodb');
const mongoClient = mongoDriver.MongoClient;
var ObjectId = require('mongodb').ObjectID;

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

function getUsers(callback) {
  users.find().toArray((error, users) => {
    if (error) {
      console.log('Error getting users');
    } else {
      callback(users); 
    }
  });
}

function findUserByID(_id, callback) {
  users.findOne({ _id: ObjectId(_id)}, (err, user) => {
    if (user) {
      callback(null, user);
    } else {
      callback('User not found')
    }
  });
}

function findUser(username, callback) {
  users.findOne({ username }, (err, user) => {
    if (user) {
      callback(null, user);
    } else {
      callback('User not found')
    }
  });
}

function createUser(newUser) {
  const username = newUser.username;
  findUser(username, (error, user) => {
    if (user) {
      console.log('User already exists')
    } else {
      users.insert(newUser)
    }
  });
}

function loginUser(currentUser) {
  const username = currentUser.username;
  findUser(username, (error, user) => {
    if (user) {
      users.update({ username },  { "$set": { token: 'NEWTOKEN' }} )
    } else {
      console.log('Not user found')
    }
  })
}

module.exports = {
  users: {
    createUser,
    loginUser,
    findUserByID,
    getUsers
  },
  messages: {},
  posts: {},
  comments: {}
}