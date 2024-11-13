import { StyleSheet, View } from "react-native";
import { useDynamicColors } from "../../../styles/useDynamicColors";
import { globalStyles } from "../../../styles/constants";

interface OuterCardProps {
  children: React.ReactNode;
  style?: object | object[];
}

export default function OuterCard({ children, style }: OuterCardProps) {

  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...globalStyles.container,
    borderRadius: 20,
  },
});