import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import BackgroundGradient from '../../styles/GradientBackground';
import { colors } from '../../styles/constants';

interface CardProps {
  children: React.ReactNode;
  style?: object | object[];
  pressable?: boolean;
  onPress?: () => void;
}

const Card = ({ children, style, pressable, onPress }: CardProps) => {
  if (pressable) {
    return (
      <Pressable onPress={onPress} style={styles.cardShadow}>
        <BackgroundGradient
          topColor={colors.cardColor}
          bottomColor={colors.cardColor}
          style={[styles.card, style]}
        >
          {children}
        </BackgroundGradient>
      </Pressable>
    );
  } else {
    return (
      <BackgroundGradient
        topColor={colors.cardColor}
        bottomColor={colors.cardColor}
        style={[styles.card, style]}
      >
        {children}
      </BackgroundGradient>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Card;
