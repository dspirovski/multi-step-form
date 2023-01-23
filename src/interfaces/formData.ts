export interface FormDataInterfaces {
  firstName: string;
  email: string;
  phoneNumber: string;
  planType: string;
  planPrice: string;
  planPeriod: string;
  addOns: [];
  addOnsPrice: [];
}

export interface FinishingUpInterfaces {
  data: FormDataInterfaces;
}
