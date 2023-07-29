export interface LoginDataInterface {
  offerupNick: string;
  password: string;
}
export interface IInquiry {
  id?: string;
  offerupNick?: string;
  firstName?: string;
  lastName?: string;
  customerName?: string;
  productName?: string;
  to?: string;
  region?: string;
  isImportant?: boolean;
  notes?: string;
}
export interface IUser {
  id?: string;
  offerupNick?: string;
  firstName?: string;
  lastName: string;
  role: string;
  commissionRate: number;
  billingInfo: IBillingInfo;
}
export interface IBillingInfo {
  fullName: string;
  email: string;
  address: string;
  iban: string;
  swift: string;
}
export interface ICallReqQuery {
  customerName: string;
  phone: string;
  isCalled: 'pending' | 'in progress' | 'done';
  salesmanNote: String;
  callerNote: String;
}
