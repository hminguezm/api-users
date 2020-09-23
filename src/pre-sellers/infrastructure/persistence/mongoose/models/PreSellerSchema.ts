import mongoose, { Document, Schema } from 'mongoose';
import { IPreSeller } from '../../../../domain/entity/IPreSeller';
import {
  // AvailableKindOfSociety,
  // AvailableKindOfStore,
  STATUS_DATA_SELLER,
  CONSUMER_GROUP,
} from '../../../../domain/constants';

interface IPreSellerSchema extends Document, IPreSeller {}

const PreSellerSchema = new Schema(
  {
    seller_information: {
      name: { type: String, required: true },
      lastname: { type: String, required: true },
      document_number: { type: String, required: true, unique: true },
      email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
      },
      phone: { type: String, required: true },
      country: { type: String, required: true },
    },
    store_information: {
      commercial_name: { type: String, required: true, unique: true },
      social_reason: { type: String },
      kind_of_society: {
        type: String,
        // enum: Object.values(AvailableKindOfSociety),
      },
      kind_of_store: {
        type: String,
        // enum: Object.values(AvailableKindOfStore),
      },
      company_business: { type: String },
      legal_representative: { type: String, unique: true },
      id_social_reason: {
        type: String,
        trim: true,
        unique: true,
      },
      store_address: {
        street: { type: String },
        number: { type: String },
        office: { type: String },
        administrative_division_first: { type: String },
        administrative_division_second: { type: String },
        administrative_division_third: { type: String },
      },
    },
    about_store: {
      sales_estimate: { type: String },
      quantity_products: { type: String },
      main_category: { type: String },
      web_site: { type: String },
      other_marketplace: [String],
      official_distributor: { type: Boolean },
      marketing_expenses_estimate: { type: String },
      use_api: { type: Boolean },
      inventory_available: { type: String },
      kind_of_warehouse: { type: String },
      return_warehouse_address: {
        street: { type: String },
        number: { type: String },
        office: { type: String },
        administrative_division_first: { type: String },
        administrative_division_second: { type: String },
        administrative_division_third: { type: String },
      },
      pickup_warehouse_address: {
        street: { type: String },
        number: { type: String },
        office: { type: String },
        administrative_division_first: { type: String },
        administrative_division_second: { type: String },
        administrative_division_third: { type: String },
      },
    },
    documentation: [String],
    declarations: {
      term_relationship: { type: Boolean },
      term_consultant: { type: Boolean },
      term_participation: { type: Boolean },
    },
    hear_about_us: { type: String },
    status: {
      type: String,
      enum: Object.values(STATUS_DATA_SELLER),
      default: STATUS_DATA_SELLER.WAITING_DATA,
    },
    consumer: { type: String },
    consumer_group: {
      type: String,
      enum: Object.values(CONSUMER_GROUP),
      default: CONSUMER_GROUP.PRE_SELLER,
    },
  },
  { timestamps: true, collection: 'pre_seller' }
);

export default mongoose.model<IPreSellerSchema>('pre_seller', PreSellerSchema);
