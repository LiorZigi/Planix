import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './models/IconProps';
import { useDynamicColors } from '../../styles/useDynamicColors';

const Heart = ({
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
          <Path d="M12 7.694C10 3 3 3.5 3 9.5s9 11 9 11s9-5 9-11s-7-6.5-9-1.806" />
        </G>
      </Svg>
    </View>
  );
};

export default Heart;
