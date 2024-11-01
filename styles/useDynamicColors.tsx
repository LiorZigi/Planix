import { Appearance, ColorSchemeName } from 'react-native';

const getColors = (colorScheme: ColorSchemeName) => {
  const colors = {
    light: {
      primaryColor: '#687EFF',
      successColor: '#2ecc71',
      textColor: 'black',
      textInfoColor: '#808080',
      headerColor: '#f5f6fa',
      modalHeaderColor: '#f5f6fa',
      cardTopColor: '#ffffff',
      cardBottomColor: '#ffffff',
      topBackgroundColor: '#f5f6fa',
      bottomBackgroundColor: '#f5f6fa',
      bottomTabsColor: '#f5f6fa',
      borderColor: '#343435',
      inputBackgroundColor: '#e0e9f8',
      inputBorderColor: '#343435',
    },
    dark: {
      primaryColor: '#0091ff',
      successColor: '#2ecc71',
      textColor: '#f5f6fc',
      textInfoColor: 'gray',
      headerColor: '#151718',
      modalHeaderColor: '#151718',
      cardTopColor: '#1b1d1e',
      cardBottomColor: '#1b1d1e',
      topBackgroundColor: '#151718',
      bottomBackgroundColor: '#151718',
      bottomTabsColor: '#151718',
      borderColor: '#4c5155',
      inputBackgroundColor: '#2b2d31',
      inputBorderColor: '#343435',
    },
  };

  return colors[colorScheme as keyof typeof colors];
};

export function useDynamicColors(colorScheme?: ColorSchemeName) {
  const colors = getColors('dark');

  return colors;
}
