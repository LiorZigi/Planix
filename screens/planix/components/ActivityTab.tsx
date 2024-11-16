import { Text, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../../../styles/constants';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/selectors/themeSelectors';

export default function ActivityTab() {
  const theme = useSelector(selectTheme);
  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, { color: theme.textColor }]}>Activity</Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
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
  },
  description: {
    fontSize: 16,
  },
});
