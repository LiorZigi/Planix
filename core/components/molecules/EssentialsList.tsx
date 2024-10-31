import { ScrollView, StyleSheet, Text, View } from "react-native";
import Checkbox from "../atoms/CheckBox";
import NumberPicker from "./NumberPicker";
import { useState } from "react";
import { useDynamicColors } from "../../../styles/useDynamicColors";

interface EssentialsListProps {
   data: Array<{
      isChecked: boolean;
      product: string | number;
      amount?: string | number;
   }>;
}

export default function EssentialsList({ data }: EssentialsListProps) {
   const [amount, setAmount] = useState<number | undefined>(0);
   return (
      <ScrollView style={styles.container}>
         {data.map((item: any, index: any) => (
            <View style={styles.essentialsList} key={index}>
               <View style={styles.productContainer}>
                  <Text style={styles.text}>Item Image</Text>
                  <Text style={styles.text}>{item.product}</Text>
               </View>
               <View style={styles.amountContainer}>
                  <NumberPicker style={styles.input} value={amount || item.amount} onValueChange={setAmount} />
               </View>
            </View>
         ))}
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: useDynamicColors().inputBackgroundColor,
      padding: 10,
   },
   essentialsList: {
      alignItems: 'center',
   },
   productContainer: {
      alignItems: 'center',
      gap: 20,
   },
   amountContainer: {
      // flexDirection: 'row',
      // alignItems: 'center',
      // gap: 10,
   },
   text: {
      fontSize: 20,
      color: useDynamicColors().textColor,
   },
   input: {

   },
});
