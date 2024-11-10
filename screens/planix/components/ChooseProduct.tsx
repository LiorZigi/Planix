import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductCard from "../../../core/components/atoms/ProductCard";
import { globalStyles } from "../../../styles/constants";

export default function ChooseProduct() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.productsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productsContainer: {
    gap: 10,
  },
});