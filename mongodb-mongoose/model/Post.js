import mongoose, { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, lowercase: true },
  // content: { type: String, required: true },
  path: { type: String, required: true },
  tags: [String],
  votes: Number,
  views: Number,
  comments: [],
  createdAt: Date,
  updatedAt: Date,
  published: { type: Boolean, required: true },
});

// MIDDLEWARE
// postSchema.pre("init", function (next) {
//   this.createdAt = Date.now();
// });

// postSchema.pre("save", function (next) {
//   if (this.isModified("title") || this.isModified("content")) {
//     this.updatedAt = Date.now();
//   }
//   next();
// });

const Post = model("Post", postSchema);
export default Post;
