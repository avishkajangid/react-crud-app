import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);

const userSchema = mongoose.Schema({
  userId: { type: Number, unique: true },
  name: String,
  username: String,
  email: String,
  phone: String,
});

userSchema.pre("save", async function (next) {
  try {
    const doc = this;
    const counter = await Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    doc.userId = counter.seq;
    next();
  } catch (error) {
    return next(error);
  }
});

const postUser = mongoose.model("user", userSchema);

export default postUser;