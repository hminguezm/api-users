import mongoose, { Document, Schema } from 'mongoose';
import { ISeller } from '../../../../domain/entity/ISeller';

interface ISellerSchema extends Document, ISeller {}

const SellerSchema: Schema = new Schema(
  {
    consumer: { type: String, required: true },
    consumerUsername: { type: String, required: true },
    vendors: [String],
    shops: { type: Map, of: String, required: true },
  },
  { collection: 'seller' }
);

export default mongoose.model<ISellerSchema>('Seller', SellerSchema);
