import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlanixParamList, PlanixRoutes, PlanixScreenProps } from "../../core/@planix/types";
import PlanixScreen from "./PlanixScreen";
import ChooseProduct from "./components/ChooseProduct";
import { selectTheme } from "../../store/selectors/themeSelectors";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator<PlanixParamList>();

export default function PlanixInnerScreen({ navigation, route }: PlanixScreenProps) {
  const theme = useSelector(selectTheme);

  return (
    <Stack.Navigator initialRouteName={PlanixRoutes.Planix}
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.topBackgroundColor,
        },
        headerStyle: {
          backgroundColor: theme.topBackgroundColor,
        },
        headerTitleStyle: {
          color: theme.textColor,
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