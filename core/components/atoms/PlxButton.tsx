import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../../styles/constants';
import PlanixIcon from '../../icons/PlanixIcon';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface PlxButtonProps {
  title: string;
  color?: string;
  textColor?: string;
  pill?: boolean;
  icon?: string;
  iconColor?: string;
  onPress?: () => void;
}

const PlxButton = ({
  title,
  color = useDynamicColors().primaryColor,
  textColor = useDynamicColors().textColor,
  pill = true,
  icon,
  iconColor,
  onPress,
}: PlxButtonProps) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        backgroundColor: color,
        borderRadius: pill ? 32 : 8,
        flexDirection: 'row',
      }}
      onPress={onPress}
    >
      {icon && <PlanixIcon iconName={icon} size={20} color={iconColor} />}
      <Text style={{ ...styles.buttonText, color: textColor }}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: useDynamicColors().primaryColor,
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: useDynamicColors().textColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlxButton;
