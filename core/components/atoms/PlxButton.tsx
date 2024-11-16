import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Pressable, Animated } from 'react-native';
import PlanixIcon from '../../icons/PlanixIcon';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/selectors/themeSelectors';

interface PlxButtonProps {
  title?: string;
  style?: any;
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
  style,
  color,
  textColor,
  pill = true,
  icon,
  iconColor,
  disabled,
  onPress,
}: PlxButtonProps) => {
  const theme = useSelector(selectTheme);
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
    outputRange: ['gray', color || theme.primaryColor],
  });

  return (
    <Animated.View style={
      [
        styles.button,
        {
          backgroundColor: backgroundColor,
          borderRadius: pill ? 32 : 8,
        },
        style
      ]
    }>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        style={style}

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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlxButton;
