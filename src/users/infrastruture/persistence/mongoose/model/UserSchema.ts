import mongoose, { Document, Schema } from 'mongoose';

const UserSchema = new Schema(
  { name: { type: String } },
  {
    timestamps: true,
    collection: 'users',
  },
);

export default mongoose.model<Document>('User', UserSchema);
