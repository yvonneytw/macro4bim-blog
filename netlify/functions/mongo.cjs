const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  // const uri = process.env.MONGODB_URI; // this is if you want to process the variable passing from Netlify dashboard
  // (Settings > Build & Deploy > Environment => add Mong connection string as environment variable MONGODB_URI)
  const uri = "mongodb+srv://macro4bim:UTmUyD52Vmb0zvq5@cluster0.a9cbb.mongodb.net/";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db("your-database-name");
    const collection = database.collection("your-collection-name");
    const result = await collection.find({}).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data" }),
    };
  } finally {
    await client.close();
  }
};
