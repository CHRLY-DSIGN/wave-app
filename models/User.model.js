const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: {
      type: String,
      unique: true
    },
    name: String,
    password: String,
    profileImg: String,
    role: {
        type: String,
        enum: ['BASIC', 'ADMIN'],
        default: 'BASIC',
      },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;