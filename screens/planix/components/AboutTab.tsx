import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/constants';
import { useDynamicColors } from '../../../styles/useDynamicColors';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.description}>
        Planix is a mobile application that helps you plan and organize events
        with your friends and family. You can create groups, add members, and
        plan events together. Planix also helps you create shopping lists and
        assign tasks to group members.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   ...globalStyles.container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: useDynamicColors().textColor,
  },
  description: {
    fontSize: 16,
    color: useDynamicColors().textColor,
  },
});
