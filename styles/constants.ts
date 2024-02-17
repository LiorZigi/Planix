import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const colors = {
  // primaryColor: '#f8380e',
  primaryColor: '#33bafe',
  successColor: '#2ecc71',
  textColor: '#f5f6fc',
  // cardTopColor: '#1a1b1d',
  // cardBottomColor: '#1d1d1e',
  cardColor: '#1a1b1d',
  cardBorderColor: '#505256',
  topBackgroundColor: '#2b2d31',
  bottomBackgroundColor: '#171718',
  bottomTabsColor: '#131313',
  borderColor: '#343435',
  inputBackgroundColor: '#2b2d31',
  inputBorderColor: '#343435',
};
const loadFonts = async () => {
  await Font.loadAsync({
    'Kanit-Regular': require('../assets/Kanit/Kanit-Regular.ttf'),
    'Kanit-Bold': require('../assets/Kanit/Kanit-Bold.ttf'),
  });
};

const fonts = {
  regular: 'Kanit-Regular',
  bold: 'Kanit-Bold',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: colors.textColor,
  },
  button: {
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.textColor,
  },
});

export { colors, fonts, globalStyles };
