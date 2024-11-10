import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanixParamList, PlanixRoutes, PlanixScreenProps } from "../../core/@planix/types";
import PlanixScreen from "./PlanixScreen";
import { useDynamicColors } from "../../styles/useDynamicColors";
import ChooseProduct from "./components/ChooseProduct";

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function PlanixInnerScreen({ navigation, route }: PlanixScreenProps) {
  const dynamicColors = useDynamicColors();

  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.Planix}
      screenOptions={{
        contentStyle: {
          backgroundColor: dynamicColors.topBackgroundColor,
        },
        headerStyle: {
          backgroundColor: dynamicColors.topBackgroundColor,
        },
        headerTitleStyle: {
          color: dynamicColors.textColor,
        },
      }}
    >
      <Stack.Screen name={PlanixRoutes.Planix} component={PlanixScreen} initialParams={route.params} options={{ headerShown: false }} />
      <Stack.Screen name={PlanixRoutes.ChooseProduct} component={ChooseProduct} options={{
        presentation: 'modal',
        headerTitle: 'Products',
      }} />
    </Stack.Navigator>
  );
}