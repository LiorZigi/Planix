import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Animated, { FadeInLeft, FadeOut, FadeOutLeft, FadeOutRight, FlipInEasyX, FlipOutEasyX } from "react-native-reanimated";
import { PlanixRoutes, PlanixScreenProps } from "../../core/@planix/types";
import { useFetchProducts } from "../../core/hooks/useFetchProducts";
import { Products, Product } from "../../mocks/products/products";
import ProductCard from "../../core/components/atoms/ProductCard";
import PlxButton from "../../core/components/atoms/PlxButton";
import { globalStyles } from "../../styles/constants";
import { selectTheme } from "../../store/selectors/themeSelectors";

const PAGE_SIZE = 6;
const EXIT_ANIMATION_DURATION = 500;
const BASE_DELAY = 100;

export default function ProductsListSetupScreen({ navigation, route }: PlanixScreenProps<PlanixRoutes.ProductsListSetupScreen>) {
  const theme = useSelector(selectTheme);
  const [products, setProducts] = useState<Products | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await useFetchProducts();
      setProducts(fetchedProducts);
      const combinedProducts = [...fetchedProducts.disposables, ...fetchedProducts.food];
      setDisplayedProducts(combinedProducts.slice(0, PAGE_SIZE));
    };
    fetchProducts();
  }, []);

  const handleNext = () => {
    if (isTransitioning || !products) return;

    const combinedProducts = [...products.disposables, ...products.food];
    const totalPages = Math.ceil(combinedProducts.length / PAGE_SIZE);
    const nextPage = currentPage + 1;

    if (nextPage >= totalPages) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPage(nextPage);
      setDisplayedProducts(combinedProducts.slice(nextPage * PAGE_SIZE, (nextPage + 1) * PAGE_SIZE));
      setIsTransitioning(false);
    }, EXIT_ANIMATION_DURATION);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ ...globalStyles.text, color: theme.textColor, fontSize: 36, fontWeight: 'bold', textAlign: 'center' }}>
        Select the products you plan to bring
      </Text>
      <View style={styles.productsContainer}>
        {displayedProducts.map((product, index) => (
          <Animated.View
            entering={FadeInLeft.duration(500).delay(index * BASE_DELAY)}
            exiting={FadeOutLeft.duration(EXIT_ANIMATION_DURATION)}
            key={product.id}
            style={styles.productCardWrapper}
          >
            <ProductCard style={styles.productCard} product={product.name} mode="compact" />
          </Animated.View>
        ))}
        <Animated.View style={styles.buttonWrapper} entering={FadeInLeft.duration(900).delay(1000)}>
          <PlxButton title='Next' onPress={handleNext} disabled={isTransitioning} />
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: 'center',
    gap: 40,
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 15,
  },
  productCardWrapper: {
    // Optional: Add styles if needed
  },
  productCard: {
    height: 150,
    width: 150,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 16,
  },
});
