import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Checkbox from '../atoms/CheckBox';
import NumberPicker from './NumberPicker';
import { useState } from 'react';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import { EssentalItem } from '../../../models/EventData';

interface EssentialsListProps {
  data: EssentalItem[] | undefined;
}

export default function EssentialsList({ data }: EssentialsListProps) {
  const [amount, setAmount] = useState<number | undefined>(0);
  return (
    <ScrollView style={styles.container}>
      {data?.map((item: EssentalItem, index: any) => (
        <View style={styles.essentialsList} key={index}>
          <View style={styles.productContainer}>
            {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.units}>{item.units}</Text>
          </View>
          <View style={styles.amountContainer}>
            <NumberPicker
              style={styles.input}
              value={amount || item.amount}
              onValueChange={setAmount}
            />
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
  image: {
    width: 100,
    height: 100,
  },
  essentialsList: {
    alignItems: 'center',
  },
  productContainer: {
    alignItems: 'center',
    gap: 10,
  },
  units: {
    fontSize: 15,
    color: useDynamicColors().textColor,
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
  input: {},
});
