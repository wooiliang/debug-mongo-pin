const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'pin';

const getLovesByUserId = (userId) => {
  const collection = db.collection('love');
  const cursor = collection.find({ foo: 'bar' });
  return cursor.toArray();
};

let db;
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
 
  db = client.db(dbName);
 
  getLovesByUserId("abc").then((listIds) => {
    console.log({listIds});
    client.close();
  }).catch((err) => {
    client.close();
  });
});
