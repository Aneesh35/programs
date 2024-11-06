import { MongoClient } from 'mongodb';

const mongodbUrl = "mongodb://localhost:27017";
const user = new MongoClient(mongodbUrl);

try {
  await user.connect();
  console.log("MongoDB connection Success!!");
} catch (err) {
  console.log("error occurred:\n" + err)
} finally {
  await user.close();
}
