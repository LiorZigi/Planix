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
      primaryColor: '#687EFF',
      successColor: '#2ecc71',
      textColor: '#f5f6fc',
      textInfoColor: 'gray',
      headerColor: '#131313',
      modalHeaderColor: '#131313',
      cardTopColor: '#1A1B1F',
      cardBottomColor: '#1A1B1F',
      topBackgroundColor: '#131313',
      bottomBackgroundColor: '#131313',
      bottomTabsColor: '#131313',
      borderColor: '#343435',
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
