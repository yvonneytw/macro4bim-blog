// netlify/functions/addComment.js
const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  const { postId, text } = JSON.parse(event.body);
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db("your-database-name");
    const commentsCollection = database.collection("comments");

    const newComment = {
      postId,
      text,
      createdAt: new Date(),
    };

    const result = await commentsCollection.insertOne(newComment);

    return {
      statusCode: 200,
      body: JSON.stringify(result.ops[0]),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to add comment" }),
    };
  } finally {
    await client.close();
  }
};
