type UserData = {
  firstName: string;
  email: string;
  phoneNumber: string;
  planPeriod: string;
  planType: string;
  planPrice: String;
};

export type PersonalInfoInterfaces = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};
