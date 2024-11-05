import { NavigationProp, RouteProp } from '@react-navigation/native';
import { PlanixParamList } from './routes';

export type PlanixNavigationProp<RouteName extends keyof PlanixParamList = keyof PlanixParamList>
  = NavigationProp<PlanixParamList, RouteName>;

export type PlanixRouteProp<RouteName extends keyof PlanixParamList = keyof PlanixParamList>
  = RouteProp<PlanixParamList, RouteName>;

export type PlanixScreenProps<RouteName extends keyof PlanixParamList = keyof PlanixParamList> = {
  navigation: PlanixNavigationProp<RouteName>;
  route: PlanixRouteProp<RouteName>;
};
