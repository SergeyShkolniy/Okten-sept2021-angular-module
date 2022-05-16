import {IUser} from './user.interface';

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IAddress {
  city: string;
  street: string;
}

export interface IUserDetails extends IUser{
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany;
}
