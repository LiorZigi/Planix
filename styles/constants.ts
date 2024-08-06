import { ColorSchemeName, Dimensions, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { useDynamicColors } from './useDynamicColors';

const window = Dimensions.get('screen');

const colors = {
  // primaryColor: '#f8380e',
  // primaryColor: '#33bafe',
  primaryColor: '#687EFF',
  successColor: '#2ecc71',
  textColor: '#f5f6fc',
  textInfoColor: 'gray',
  headerColor: '#131313',
  modalHeaderColor: '#2b2d31',
  // cardTopColor: '#1a1b1d',
  // cardBottomColor: '#1d1d1e',
  cardColor: '#272727',
  cardBorderColor: '#505256',
  // topBackgroundColor: '#2b2d31',
  // bottomBackgroundColor: '#171718',
  topBackgroundColor: '#131313',
  bottomBackgroundColor: '#131313',
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
    backgroundColor: useDynamicColors().topBackgroundColor,
  },
  text: {
    fontSize: 18,
    color: useDynamicColors().textColor,
  },
  button: {
    backgroundColor: useDynamicColors().primaryColor,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: useDynamicColors().textColor,
  },
});

export { colors, fonts, globalStyles, window };
