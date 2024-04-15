import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './models/IconProps';
import { useDynamicColors } from '../../styles/useDynamicColors';

const Plus = ({
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
          <Path d="M6 12h6m0 0h6m-6 0v6m0-6V6" />
        </G>
      </Svg>
    </View>
  );
};

export default Plus;
