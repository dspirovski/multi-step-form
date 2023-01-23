type UserData = {
  firstName: string;
  email: string;
  phoneNumber: string;
  planPeriod: string;
  planType: string;
  planPrice: String;
};

export interface PickAddonsProps {
  addOns: [];
  addOnsPrice: [];
  updateFields: (fields: Partial<UserData>) => void;
}

export interface PickAddonsInterfaces {
  id: number;
  title: string;
  subTitle: string;
  price: string;
}
