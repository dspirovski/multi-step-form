type UserData = {
  firstName: string;
  email: string;
  phoneNumber: string;
  planPeriod: string;
  planType: string;
  planPrice: String;
};

export interface SelectPlanProps {
  updateFields: (fields: Partial<UserData>) => void;
  planType: string;
}

export interface SelectPlanInterfaces {
  id: number;
  title: string;
  price: string;
  period: string;
  icon: string;
}
