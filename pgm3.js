import { MongoClient } from 'mongodb';
const mongodbUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongodbUrl);

try {
  await client.connect();
  const database = client.db("UsersDb");
  const collection = database.collection("Users");

  const user = await collection.find().toArray();
  console.log("Users found:", user);
} catch (err) {
  console.log("error occurred:\n" + err)
}
finally {
  await client.close();
}

