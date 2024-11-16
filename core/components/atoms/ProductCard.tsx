import { globalStyles } from "../../../styles/constants";
import { StyleSheet, Text, View } from "react-native";
import NumberPicker from "../molecules/NumberPicker";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../store/selectors/themeSelectors";

export default function ProductCard() {
  const theme = useSelector(selectTheme);
  const [amount, setAmount] = useState<number>(0);

  const handleAmountChange = (value: number): void => {
    setAmount(value);
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.inputBackgroundColor }]}>
      <View style={styles.statusContainer}>
        <Text style={{ ...globalStyles.text, color: theme.textColor }}>Product Name</Text>
        <Text style={{ ...globalStyles.text, color: theme.textColor, textAlign: 'center' }}>Status</Text>
        <Text style={{ ...globalStyles.text, color: theme.textColor, textAlign: 'center' }}>7/7</Text>
      </View>
      <View style={styles.amountContainer}>
        <NumberPicker value={amount} onValueChange={handleAmountChange} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
