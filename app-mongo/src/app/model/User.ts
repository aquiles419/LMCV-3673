// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('User', UserSchema);
