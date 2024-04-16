import React, { useState } from 'react';
import { View, Text, Animated, Pressable, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useDynamicColors } from '../../../styles/useDynamicColors';

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
            name={expanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={useDynamicColors().textColor}
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
    backgroundColor: useDynamicColors().inputBackgroundColor,
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: useDynamicColors().textColor,
  },
  content: {
    padding: 16,
    fontSize: 18,
    color: useDynamicColors().textColor,
  },
});
