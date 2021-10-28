import React from 'react';

import {Animated} from 'react-native';

import {
  FEATHER_CONTAINER_VALUE_HEIGHT,
  NUMBER_SCROLLING_SPEED,
} from '../../../../constants';

import {styles} from './styles';

import {DataListItem} from '@utils/types';

interface Props {
  scrollX: Animated.Value;
  item: DataListItem;
  itemIndex: number;
  fontSize: number;
  itemWidth: number;
}

export const FeatherValueNumber = ({
  scrollX,
  item,
  fontSize,
  itemIndex,
  itemWidth,
}: Props) => {
  const itemIndexIncrement = itemIndex + 1;
  const itemDistance = itemWidth * itemIndexIncrement;
  const hidingContainerDistance =
    -FEATHER_CONTAINER_VALUE_HEIGHT * itemIndexIncrement;
  const translateYContainer = scrollX.interpolate({
    inputRange: [0, itemDistance],
    outputRange: [0, hidingContainerDistance],
  });

  const splittedNumbers = item.value
    .toString()
    .split('')
    .map((value, index) => {
      const boxNumberDistance = -FEATHER_CONTAINER_VALUE_HEIGHT * itemIndex;
      const additionalNumberDistance = index * NUMBER_SCROLLING_SPEED;
      const translateYValue = translateYContainer.interpolate({
        inputRange: [boxNumberDistance, boxNumberDistance / 2, 0],
        outputRange: [0, additionalNumberDistance, 0],
      });

      return (
        <Animated.Text
          style={[
            styles.text,
            {
              fontSize,
              transform: [
                {
                  translateY: translateYValue,
                },
              ],
            },
          ]}
          key={`value_${item.id}${value}${index}`}>
          {value}
        </Animated.Text>
      );
    });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: translateYContainer,
            },
          ],
        },
      ]}>
      {splittedNumbers}
    </Animated.View>
  );
};
