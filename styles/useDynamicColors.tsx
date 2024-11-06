import { Appearance, ColorSchemeName } from 'react-native';

const getColors = (colorScheme: ColorSchemeName) => {
  const colors = {
    light: {
      primaryColor: '#687EFF',
      successColor: '#2ecc71',
      textColor: 'black',
      buttonTextColor: '#f6f7f9',
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
      primaryColor: '#58c4dc',
      successColor: '#2ecc71',
      textColor: '#f6f7f9',
      buttonTextColor: '#f6f7f9',
      textInfoColor: 'gray',
      headerColor: '#1a1c21',
      modalHeaderColor: '#16181d',
      cardTopColor: '#23272f',
      cardBottomColor: '#23272f',
      topBackgroundColor: '#1a1c21',
      bottomBackgroundColor: '#16181d',
      bottomTabsColor: '#151718',
      borderColor: '#404756',
      inputBackgroundColor: '#333a45',
      inputBorderColor: '#343435',
    },
  };

  return colors[colorScheme as keyof typeof colors];
};

export function useDynamicColors(colorScheme?: ColorSchemeName) {
  const colors = getColors(colorScheme || Appearance.getColorScheme());

  return colors;
}
