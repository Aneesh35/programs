import { MongoClient } from 'mongodb';
const mongodbUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongodbUrl);
try {
  await client.connect();
  const database = client.db("UsersDb");
  const collection = database.collection("Users");
  const user = await collection.insertOne({ name: "Aneesh R Rao", age: 19, city: "Udupi", phone: 9019755061 });
  console.log(" user with the id: " + user.insertedId + " created successfully!! ");
} catch (err) {
  console.log("error occurred:\n" + err)
}
finally {
  await client.close();
}