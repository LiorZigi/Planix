import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanixParamList, PlanixRoutes, PlanixScreenProps } from "../../core/@planix/types";
import ProductsListSetupScreen from "./ProductsListSetupScreen";
import MembersListSetupScreen from "./MembersListSetupScreen";

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function EventSetupStackScreen({ navigation, route }: PlanixScreenProps) {

  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.MembersListSetupScreen}>
      <Stack.Screen name={PlanixRoutes.MembersListSetupScreen} component={MembersListSetupScreen} initialParams={route.params} />
      <Stack.Screen name={PlanixRoutes.ProductsListSetupScreen} component={ProductsListSetupScreen} />
    </Stack.Navigator>
  );
}