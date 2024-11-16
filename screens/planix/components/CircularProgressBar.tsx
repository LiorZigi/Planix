import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { selectTheme } from '../../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

interface CircularProgressBarProps {
  progress: number;
}

function CircularProgressBar({ progress }: CircularProgressBarProps) {
  const theme = useSelector(selectTheme);
  const animatedValue = useRef<Animated.Value>(new Animated.Value(0)).current;
  const [strokeDashoffset, setStrokeDashoffset] = useState<number>(0);
  const circumference = 2 * Math.PI * 50; // 50 is the radius
  const halfCircle = 50 + 15; // Radius + Stroke width
  const circleRef = useRef<React.ElementRef<typeof Circle>>(null); // Type the useRef hook

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false, // Set to false for web
    }).start();
  }, [progress]);

  useEffect(() => {
    animatedValue.addListener((v) => {
      const maxPerc = 100 * v.value / 100;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      setStrokeDashoffset(strokeDashoffset);
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [circumference]);

  return (
    <View style={styles.container}>
      <Svg
        width={halfCircle * 3}
        height={halfCircle * 3}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <Circle
          cx="50%"
          cy="50%"
          r="50"
          //  stroke="#e6e6e6"
          strokeWidth="15"
          fill="none"
        />
        <Circle
          ref={circleRef}
          cx="50%"
          cy="50%"
          r="50"
          stroke="#ff8b3e"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      <Text style={[styles.percentageText, { color: theme.textColor }]}>{`${progress}%`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default CircularProgressBar;
