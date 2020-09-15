/* eslint-disable camelcase */
export interface IPreSeller {
  registration_date: Date;
  seller_information: {
    country: string;
    name: string;
    lastname: string;
    document_number: string;
    email: string;
    phone: string;
    seller_address: {
      street: string;
      number: string;
      office: string;
      administrative_division_first: string;
      administrative_division_second: string;
      administrative_division_third: string;
    };
  };
  store_information: {
    commercial_name: string;
    business_name: string;
    kind_of_society: string;
    kind_of_store: string;
    store_address: {
      street: string;
      number: string;
      office: string;
      administrative_division_first: string;
      administrative_division_second: string;
      administrative_division_third: string;
    };
    economic_activity: Array<string>;
    legal_representative: string;
    id_social_reason: string;
  };
  about_store: {
    sales_estimate: string;
    quantity_products: string;
    main_category: string;
    web_site: string;
    other_marketplace: Array<string>;
    official_distributor: boolean;
    use_api: boolean;
    inventory_available: string;
    kind_of_warehouse: string;
    return_warehouse_address: {
      street: string;
      number: string;
      office: string;
      administrative_division_first: string;
      administrative_division_second: string;
      administrative_division_third: string;
    };
    pickup_warehouse_address: {
      street: string;
      number: string;
      office: string;
      administrative_division_first: string;
      administrative_division_second: string;
      administrative_division_third: string;
    };
  };
  declarations: {
    term_relationship: boolean;
    term_consultant: boolean;
    term_participation: boolean;
  };
  status: string;
  consumer: string;
}
