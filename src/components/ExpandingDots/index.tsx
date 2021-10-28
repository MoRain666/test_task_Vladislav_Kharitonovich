import React from 'react';
import {Animated, View} from 'react-native';

import {styles} from './styles';

import {WHITE} from '@utils/colors';
import {ExpandingDotsSharedProps} from '@utils/types';

interface Props extends ExpandingDotsSharedProps {
  data: Array<any>;
  scrollX: Animated.Value;
  itemWidth: number;
}

export const ExpandingDots = ({
  scrollX,
  data,
  containerStyle,
  dotStyle,
  activeDotColor = WHITE,
  inactiveDotColor = WHITE,
  inactiveDotOpacity = 0.3,
  activeOpacity = 1,
  dotWidth = 5,
  expandingDotWidth = 15,
  itemWidth,
}: Props) => {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * itemWidth,
          index * itemWidth,
          (index + 1) * itemWidth,
        ];

        const width = scrollX.interpolate({
          inputRange,
          outputRange: [dotWidth, expandingDotWidth, dotWidth],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [inactiveDotOpacity, activeOpacity, inactiveDotOpacity],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [inactiveDotColor, activeDotColor, inactiveDotColor],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`expanding_dot_${index}`}
            style={[
              styles.dotStyle,
              dotStyle,
              {width},
              {opacity},
              {backgroundColor},
            ]}
          />
        );
      })}
    </View>
  );
};
