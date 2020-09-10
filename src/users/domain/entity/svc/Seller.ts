import mongoose, { Schema, Document } from 'mongoose';

interface Shop {
  shopId: number;
  SHOP_KEY: string;
  origin: string;
}

export interface SellerInterface extends Document {
  consumer: string;
  consumerUsername: string;
  shops: Array<Shop>;
  vendors: Array<string>;
}

const SellerSchema: Schema = new Schema({
  consumer: { type: String, required: true },
  consumerUsername: { type: String, required: true },
  shops: { type: Map, of: String, required: true },
  vendors: [String],
});

export default mongoose.model<SellerInterface>('Seller', SellerSchema);
