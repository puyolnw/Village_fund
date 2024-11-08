import { SvgIconProps } from '@mui/material';
import CreditCardIcon from 'components/icons/menu-icons/CreditCardIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InvestIcon from 'components/icons/menu-icons/InvestIcon';
import LoanIcon from 'components/icons/menu-icons/LoanIcon';
import ServiceIcon from 'components/icons/menu-icons/ServiceIcon';
import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';
import SignInIcon from 'components/icons/menu-icons/SignInIcon';
import SignUpIcon from 'components/icons/menu-icons/SignUpIcon';
import TransferIcon from 'components/icons/menu-icons/TransferIcon';
import UserIcon from 'components/icons/menu-icons/UserIcon';

export enum linkEnum {
  Dashboard = 'dashboard',
  Transactions = 'บัญชีสัจจะ',
  Accounts = 'การกู้ยืม',
  Investments = 'investments',
  Credit = 'credit-cards',
  Loans = 'loans',
  Services = 'Services',
  Setting = 'จัดการสมาชิก',
  Login = 'login',
  Signup = 'sign-up',
  ForgetPassword = 'forget-password',
  ResetPassword = 'reset-password',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
}
export const menuLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/',
    icon: HomeIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.Transactions,
    link: '/new-page',
    icon: TransferIcon,
    available: true,
  },
  {
    id: 3,
    title: linkEnum.Accounts,
    link: '#!',
    icon: UserIcon,
    available: true,
  },
  {
    id: 4,
    title: linkEnum.Investments,
    link: '#!',
    icon: InvestIcon,
    available: true,
  },
  {
    id: 5,
    title: linkEnum.Credit,
    link: '#!',
    icon: CreditCardIcon,
    available: true,
  },
  {
    id: 6,
    title: linkEnum.Loans,
    link: '#!',
    icon: LoanIcon,
    available: true,
  },
  {
    id: 7,
    title: linkEnum.Services,
    link: '#!',
    icon: ServiceIcon,
    available: true,
  },
  {
    id: 8,
    title: linkEnum.Setting,
    link: '#!',
    icon: SettingsIcon,
    available: true,
  },
  {
    id: 9,
    title: linkEnum.Login,
    link: '/authentication/login',
    icon: SignInIcon,
    available: true,
  },
  {
    id: 10,
    title: linkEnum.Signup,
    link: '/authentication/sign-up',
    icon: SignUpIcon,
    available: true,
  },
];
