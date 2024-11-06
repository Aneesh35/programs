import { MongoClient } from "mongodb";
const mongodbUrl = "mongodb://localhost:27017";
const client = new MongoClient(mongodbUrl);
try {
  await client.connect();
  const database = client.db("UsersDb");
  const collection = database.collection("Users");
  const result=await collection.updateOne({ name: "Aneesh R Rao" }, { $set: { city: "Manipal" } });
  if(result.modifiedCount > 0){
    console.log("user update successful !!");
    const user = await collection.find().toArray();
    console.log("Users found:", user);
  }
  else{
    console.log("user not found or not updated in database!!")
  }
} catch (err) {
  console.log("error occurred:\n" + err)
} finally {
  await client.close();
}
