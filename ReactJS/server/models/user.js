import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  // password: { type: String, required: true },
  id: { type: String },
  active: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  // resetPasswordToken: { type: String, default: null },
  // resetPasswordExpires: { type: Date, default: null },

  emailToken: { type: String, default: null },
  emailTokenExpires: { type: Date, default: null },
  resetPasswordToken: { type: String, default: null },
  resetPasswordExpires: { type: Date, default: null },
  role: {
    type: String,
    default: 'basic',
    enum: ["basic", "admin", "programManager","projectManager"]
   },

});

export default mongoose.model("User", userSchema);