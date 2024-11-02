import { createDrawerNavigator } from "@react-navigation/drawer";
import PlanixScreen from "./PlanixScreen";
import { useDynamicColors } from "../../styles/useDynamicColors";
import { Image, StyleSheet } from "react-native";

interface PlanixStackScreenProps {
   navigation: any;
}
const Drawer = createDrawerNavigator();

export default function PlanixStackScreen({ navigation }: PlanixStackScreenProps) {
   const dynamicColors = useDynamicColors();

   return (
      <Drawer.Navigator initialRouteName="Planix" screenOptions={
         {
            headerStyle: {
               backgroundColor: dynamicColors.topBackgroundColor,
               shadowColor: 'transparent',

            },
            headerTitle() {
               return <Image style={styles.logo} source={require('../../assets/Planix.png')} />;
            },
            drawerContentStyle: {
               backgroundColor: dynamicColors.inputBackgroundColor,
            },
            sceneContainerStyle: {
               backgroundColor: dynamicColors.topBackgroundColor,
            },
         }

      }>
         <Drawer.Screen name="Planix" component={PlanixScreen} />
         <Drawer.Screen name="Back">
            {() => navigation.goBack()}
         </Drawer.Screen>
      </Drawer.Navigator>
   );
}

const styles = StyleSheet.create({
   logo: {
      height: 35,
      width: 130,
      alignSelf: 'center',
    },
});
