import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './models/IconProps';
import { useDynamicColors } from '../../styles/useDynamicColors';

const Map = ({
  size = 24,
  hasFill = false,
  fill,
  color = useDynamicColors().textColor,
}: IconProps) => {
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <G
          fill={hasFill ? fill : 'none'}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <Path d="M15 6v15m0-15l6-3v15l-6 3m0-15L9 3m6 18l-6-3m0 0l-6 3V6l6-3m0 15V3" />
        </G>
      </Svg>
    </View>
  );
};

export default Map;
