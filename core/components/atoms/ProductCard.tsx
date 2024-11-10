import { useDynamicColors } from "../../../styles/useDynamicColors";
import { globalStyles } from "../../../styles/constants";
import { StyleSheet, Text, View } from "react-native";
import NumberPicker from "../molecules/NumberPicker";
import { useState } from "react";

export default function ProductCard() {
  const dynamicColors = useDynamicColors();
  const [amount, setAmount] = useState<number>(0);

  const handleAmountChange = (value: number): void => {
    setAmount(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={{ ...globalStyles.text, color: dynamicColors.textColor }}>Product Name</Text>
        <Text style={{ ...globalStyles.text, color: dynamicColors.textColor, textAlign: 'center' }}>Status</Text>
        <Text style={{ ...globalStyles.text, color: dynamicColors.textColor, textAlign: 'center' }}>7/7</Text>
      </View>
      <View style={styles.amountContainer}>
        <NumberPicker value={amount} onValueChange={handleAmountChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: useDynamicColors().inputBackgroundColor,
    padding: 16,
    borderRadius: 16,
    elevation: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  statusContainer: {
    gap: 10,
  },
  amountContainer: {
    alignSelf: 'center',
  }
});
