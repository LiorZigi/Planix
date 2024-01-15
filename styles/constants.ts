import { StyleSheet } from 'react-native';

const colors = {
  primaryColor: '#db1d28',
  secondaryColor: '#2ecc71',
  textColor: '#f5f6fc',
  cardColor: '#2d2d35',
  backgroundColor: '#1a1b20',
};

const fonts = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 16,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 16,
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
