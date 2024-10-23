// netlify/functions/fetchPosts.js

import mongoose from "mongoose";
import Post from "../../mongodb-mongoose/model/Post";
// const mongoose = require("mongoose");
// const Post = require('"../../mongodb-mongoose/model/Post"');
let conn = null;

module.exports.handler = async (event, context) => {
  const uri = process.env.MONGODB_URI;
  // const uri =
  //   "mongodb+srv://macro4bim:eXS4lsa5rCzfU1DP@cluster0.a9cbb.mongodb.net/m4bBlog?retryWrites=true&w=majority&appName=Cluster0";
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
