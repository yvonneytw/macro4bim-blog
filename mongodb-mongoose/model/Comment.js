import mongoose, { Schema, model } from "mongoose";

const replySchema = new Schema({
  comment_id: mongoose.Types.ObjectId,
  username: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: Date,
  votes: Number,
});

const commentSchema = new Schema({
  post_id: mongoose.Types.ObjectId,
  username: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: Date,
  votes: Number,
  replies: [replySchema],
});

// MIDDLEWARE
replySchema.pre("init", function (next) {
  this.createdAt = Date.now();
});
commentSchema.pre("init", function (next) {
  this.createdAt = Date.now();
});

const Comment = model("Comment", commentSchema);
export default Comment;
