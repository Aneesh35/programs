import { MongoClient } from "mongodb";
const mongodbUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongodbUrl);

try {
  await client.connect();
  const database = client.db("UsersDb");
  const collection = database.collection("Users");
  const result = await collection.deleteOne({ name: "Aneesh R Rao" });
  if (result.deletedCount > 0) {
    console.log("User deleted successfully!!");
    const users = await collection.find().toArray();
    console.log("Users found:", users);
  } else {
    console.log("No user found or deleted from database");
  }
} catch (err) {
  console.log("Error occurred:\n" + err);
} finally {
  await client.close();
}
