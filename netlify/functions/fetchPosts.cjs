// netlify/functions/fetchPosts.js
import mongoose from "mongoose";
import Post from "../../mongodb-mongoose/model/Post";
let conn = null;

exports.handler = async (event, context) => {
  const uri = process.env.MONGODB_URI;
  if (!conn) conn = mongoose.connect(uri);

  try {
    await conn;
    const query = event.queryStringParameters;
    let published = query.published || "";
    allPost = await Post.find({ published: `${published}` }).exec();
    return {
      statusCode: 200,
      body: JSON.stringify(allPost),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to fetch posts: ${error}` }),
    };
  } finally {
    if (conn) {
      await mongoose.disconnect();
      conn = null;
    }
  }
};
