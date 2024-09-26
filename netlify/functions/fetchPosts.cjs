// netlify/functions/fetchPosts.js
const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db("your-database-name");
    const postsCollection = database.collection("posts");
    const commentsCollection = database.collection("comments");

    const posts = await postsCollection.find({}).toArray();
    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        const comments = await commentsCollection.find({ postId: post._id }).toArray();
        return { ...post, comments };
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify(postsWithComments),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch posts" }),
    };
  } finally {
    await client.close();
  }
};
