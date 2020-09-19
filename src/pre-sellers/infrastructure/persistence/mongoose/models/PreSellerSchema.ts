import mongoose, { Document, Schema } from 'mongoose';
import { IPreSeller } from '../../../../domain/entity/IPreSeller';
import {
  AvailableKindOfSociety,
  AvailableKindOfStore,
  TYPE_STATUS_SELLER,
} from '../../../../domain/constants';

interface IPreSellerSchema extends Document, IPreSeller {}

const PreSellerSchema = new Schema(
  {
    seller_information: {
      country: {
        type: String,
        required: [true, 'the country is a required field'],
      },
      name: {
        type: String,
        required: [true, 'the name is a required field'],
      },
      lastname: {
        type: String,
        required: [true, 'the lastname is a required field'],
      },
      document_number: {
        type: String,
        required: [true, 'the rut is a required field'],
        unique: true,
      },
      email: {
        type: String,
        required: [true, 'the email is a required field'],
        unique: true,
      },
      phone: {
        type: String,
        required: [true, 'the phone number is a required field'],
      },
      seller_address: {
        street: {
          type: String,
          required: [true, 'the street is a required field'],
        },
        number: {
          type: String,
          required: [true, 'the number is a required field'],
        },
        office: { type: String },
        administrative_division_first: {
          type: String,
          required: [
            true,
            'the administrative_division_first (region or department) is a required field',
          ],
        },
        administrative_division_second: {
          type: String,
          required: [
            true,
            'the administrative_division_second (city or provinces) is a required field',
          ],
        },
        administrative_division_third: {
          type: String,
          required: [
            true,
            'the administrative_division_third (commune or districts) is a required field',
          ],
        },
      },
    },
    store_information: {
      commercial_name: {
        type: String,
        required: [true, 'the commercial_name is a required field'],
        unique: true,
      },
      business_name: {
        type: String,
        required: [true, 'the business name is a required field'],
        unique: true,
      },
      kind_of_society: {
        type: String,
        required: [true, 'the kind of society is a required field'],
        enum: Object.values(AvailableKindOfSociety),
      },
      kind_of_store: {
        type: String,
        required: [true, 'the kind of store is a required field'],
        enum: Object.values(AvailableKindOfStore),
      },
      store_address: {
        street: {
          type: String,
          required: [true, 'the street is a required field'],
        },
        number: {
          type: String,
          required: [true, 'the number is a required field'],
        },
        office: { type: String },
        administrative_division_first: {
          type: String,
          required: [
            true,
            'the administrative_division_first (region or department) is a required field',
          ],
        },
        administrative_division_second: {
          type: String,
          required: [
            true,
            'the administrative_division_second (city or provinces) is a required field',
          ],
        },
        administrative_division_third: {
          type: String,
          required: [
            true,
            'the administrative_division_third (commune or districts) is a required field',
          ],
        },
      },
      economic_activity: {
        type: Array,
        required: [true, 'the economic activity is a required field'],
      },
      legal_representative: {
        type: String,
        required: [true, 'the legal representative is a required field'],
      },
      id_social_reason: {
        type: String,
        required: [true, 'the rut social reason is a required field'],
        unique: true,
      },
    },
    about_store: {
      sales_estimate: {
        type: String,
        required: [true, 'the sales estimate is a required field'],
      },
      quantity_products: {
        type: String,
        required: [true, 'the quantity products is a required field'],
      },
      main_category: {
        type: String,
        required: [true, 'the main category is a required field'],
      },
      web_site: { type: String },
      other_marketplace: { type: Array },
      official_distributor: {
        type: Boolean,
        required: [true, 'the official distributor is a required field'],
      },
      marketing_expenses_estimate: {
        type: String,
        required: [true, 'the marketing expenses estimate is a required field'],
      },
      use_api: {
        type: Boolean,
        required: [true, 'the use api is a required field'],
      },
      inventory_available: {
        type: String,
        required: [true, 'the inventor _available a required field'],
      },
      kind_of_warehouse: {
        type: String,
        required: [true, 'the kind of warehouse is a required field'],
      },
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
    declarations: {
      term_relationship: { type: Boolean, required: true },
      term_consultant: { type: Boolean, required: true },
      term_participation: { type: Boolean, required: true },
    },
    status: {
      type: String,
      enum: Object.values(TYPE_STATUS_SELLER),
      default: TYPE_STATUS_SELLER.WAITING_DATA,
    },
    consumer: { type: String },
    registration_date: { type: Date, default: Date.now },
  },
  { collection: 'pre_seller' }
);
export default mongoose.model<IPreSellerSchema>('Pre_seller', PreSellerSchema);
