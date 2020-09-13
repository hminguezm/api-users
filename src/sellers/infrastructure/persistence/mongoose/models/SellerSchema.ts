import mongoose, { Document, Schema } from 'mongoose';
import { ISeller } from '../../../../domain/entity/ISeller';

interface ISellerSchema extends Document, ISeller {}

const SellerSchema: Schema = new Schema(
  {
    consumer: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    consumer_username: { type: String, unique: true, required: true },
    vendors: [String],
    shops: [Schema.Types.Mixed],
  },
  { collection: 'seller' }
);

export default mongoose.model<ISellerSchema>('Seller', SellerSchema);
