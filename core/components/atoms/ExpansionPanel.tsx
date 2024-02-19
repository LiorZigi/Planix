import React, { useState } from 'react';
import { View, Text, Animated, Pressable, StyleSheet } from 'react-native';
import { colors } from '../../../styles/constants';
import { Octicons } from '@expo/vector-icons';

interface ExpansionPanelProps {
  title: string;
  content: string;
}

const ExpansionPanel = ({ title, content }: ExpansionPanelProps) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleExpansion = () => {
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const panelHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleExpansion}>
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <Octicons
            name={expanded ? 'chevron-down' : 'chevron-right'}
            size={20}
            color={colors.textColor}
          />
        </Animated.View>
      </Pressable>
      <Animated.View style={{ height: panelHeight, overflow: 'hidden' }}>
        <Text style={styles.content}>{content}</Text>
      </Animated.View>
    </View>
  );
};

export default ExpansionPanel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBackgroundColor,
    borderRadius: 5,
    marginBottom: 16,
    padding: 16,
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  content: {
    padding: 16,
    color: colors.textColor,
  },
});
