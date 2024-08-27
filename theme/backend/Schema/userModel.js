import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  { 
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    address: [{
      street: { type: String, default: null },
      city: { type: String, default: null },
      state: { type: String, default: null },
      zipCode: { type: String, default: null },
    }],
    phone: String,
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;