const mongoDriver = require('mongodb');
const mongoClient = mongoDriver.MongoClient;

let contentColelction;
mongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.log('Could not connect to mongodb');
    } else {
        let db = client.db("ClassFour");
        contentColelction = db.collection("content");
    }
});

module.exports = {
    insert: function(document, callback) {
        contentColelction.insert(document, callback)
    },
    getAll: function(callback) {
        contentColelction.find().toArray((error, data) => {
            if(error){
                callback("No funciona")
            }else{
                callback(null, data);
            }
        });
    }
}