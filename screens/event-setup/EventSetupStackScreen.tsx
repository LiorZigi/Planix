import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  PlanixParamList,
  PlanixRoutes,
  PlanixScreenProps,
} from '../../core/@planix/types';
import ProductsListSetupScreen from './ProductsListSetupScreen';
import MembersListSetupScreen from './MembersListSetupScreen';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/selectors/themeSelectors';
import PlanixIcon from '../../core/icons/PlanixIcon';
import { Image, Pressable } from 'react-native';

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function EventSetupStackScreen({
  navigation,
  route,
}: PlanixScreenProps) {
  const theme = useSelector(selectTheme);
  return (
    <Stack.Navigator
      initialRouteName={PlanixRoutes.MembersListSetupScreen}
      screenOptions={{
        contentStyle: { backgroundColor: theme.topBackgroundColor },
        headerStyle: { backgroundColor: theme.topBackgroundColor },
      }}
    >
      <Stack.Screen
        name={PlanixRoutes.MembersListSetupScreen}
        component={MembersListSetupScreen}
        initialParams={route.params}
        options={{
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <PlanixIcon
                iconName="closeSmall"
                size={32}
                color={theme.textColor}
              />
            </Pressable>
          ),
          headerTitle: () => (
            <Image
              source={require('../../assets/Planix.png')}
              style={{
                width: 100,
                height: 40,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name={PlanixRoutes.ProductsListSetupScreen}
        component={ProductsListSetupScreen}
        options={{
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'minimal',
          headerTintColor: theme.textColor,
          headerTitle: () => (
            <Image
              source={require('../../assets/Planix.png')}
              style={{
                width: 100,
                height: 40,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
