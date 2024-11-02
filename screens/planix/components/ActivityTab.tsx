import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../../../styles/constants';
import { useDynamicColors } from '../../../styles/useDynamicColors';

export default function ActivityTab() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <Text style={styles.description}>
        Planix is a mobile application that helps you plan and organize events
        with your friends and family. You can create groups, add members, and
        plan events together. Planix also helps you create shopping lists and
        assign tasks to group members.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dicta ex molestias ipsa sint nam asperiores sequi, quo fugit sapiente dolorem aliquam amet eaque tempore illum dignissimos eum reprehenderit provident?
        lore
      </Text>
    </ScrollView>
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
    color: useDynamicColors().textColor,
    fontSize: 16,
  },
});
