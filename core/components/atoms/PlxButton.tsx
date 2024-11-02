import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Pressable, Animated } from 'react-native';
import PlanixIcon from '../../icons/PlanixIcon';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface PlxButtonProps {
  title?: string;
  color?: string;
  textColor?: string;
  pill?: boolean;
  icon?: string;
  iconColor?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const PlxButton = ({
  title,
  color = useDynamicColors().primaryColor,
  textColor = useDynamicColors().textColor,
  pill = true,
  icon,
  iconColor,
  disabled,
  onPress,
}: PlxButtonProps) => {
   const animation = useRef(new Animated.Value(disabled ? 0 : 1)).current;

    useEffect(() => {
      Animated.timing(animation, {
         toValue: disabled ? 0 : 1,
         duration: 200,
         useNativeDriver: false,
      }).start();
   }, [disabled]);

   const backgroundColor = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['gray', color],
    });

  return (
   <Animated.View style={
      {
         ...styles.button,
         backgroundColor: backgroundColor,
         borderRadius: pill ? 32 : 8,
      }
   }>
    <Pressable
      disabled={disabled}
      onPress={onPress}
    >
      {icon && <PlanixIcon iconName={icon} size={20} color={iconColor} />}
      <Text style={{ ...styles.buttonText, color: textColor }}>{title}</Text>
    </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlxButton;
