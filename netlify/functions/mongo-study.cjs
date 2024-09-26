const { MongoClient } = require("mongodb");

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://macro4bim:UTmUyD52Vmb0zvq5@cluster0.a9cbb.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    // await listDatabases(client);

    // const database = client.db("admin");
    const database = client.db("sample_mflix");
    const collection = database.collection("comments");
    const result = await collection.find({}).limit(10).toArray();

    console.log(result);
    // console.log(JSON.stringify(result));
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
