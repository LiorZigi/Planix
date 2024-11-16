import { ScrollView, StyleSheet, Text, View } from 'react-native';
import NumberPicker from './NumberPicker';
import { useState } from 'react';
import { EssentalItem } from '../../../models/EventData';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/selectors/themeSelectors';

interface EssentialsListProps {
  data: EssentalItem[] | undefined;
}

export default function EssentialsList({ data }: EssentialsListProps) {
  const theme = useSelector(selectTheme);
  const [amount, setAmount] = useState<number | undefined>(0);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.inputBackgroundColor }]}>
      {data?.map((item: EssentalItem, index: any) => (
        <View style={styles.essentialsList} key={index}>
          <View style={styles.productContainer}>
            {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
            <Text style={[styles.text, { color: theme.textColor }]}>{item.name}</Text>
            <Text style={[styles.units, { color: theme.textColor }]}>{item.units}</Text>
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
  },
  amountContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // gap: 10,
  },
  text: {
    fontSize: 20,
  },
  input: {},
});
