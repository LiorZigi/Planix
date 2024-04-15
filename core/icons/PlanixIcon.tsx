import { colors } from '../../styles/constants';
import Apple from './Apple';
import Chat from './Chat';
import ChevronRight from './ChevronRight';
import Close from './Close';
import CreditCard from './CreditCard';
import Heart from './Heart';
import Logout from './Logout';
import Mail from './Mail';
import Map from './Map';
import Plus from './Plus';
import Settings from './Settings';
import User from './User';

interface PlanixIconProps {
  iconName: string;
  color?: string;
  size?: number;
}

const icons: any = {
  map: Map,
  plus: Plus,
  user: User,
  settings: Settings,
  logout: Logout,
  chevronRight: ChevronRight,
  creditCard: CreditCard,
  heart: Heart,
  chat: Chat,
  apple: Apple,
  mail: Mail,
  close: Close,
};

export default function PlanixIcon({ iconName, color, size }: PlanixIconProps) {
  const Icon: any = icons[iconName];

  if (!Icon) {
    return null;
  }

  return <Icon size={size} color={color} />;
}
