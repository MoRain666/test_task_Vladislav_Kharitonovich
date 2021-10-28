import React from 'react';

import {View, Image, Animated, ImageSourcePropType} from 'react-native';

import {FadingEdgeWrapper} from '@components/FadingEdgeWrapper';
import {FeatherValueNumber} from './components/FeatherValueNumber';

import {styles} from './styles';

import {
  FADING_EDGE_TOP_START,
  FADING_EDGE_TOP_END,
  FADING_EDGE_BOTTOM_START,
  FADING_EDGE_BOTTOM_END,
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_SIZE_EDGE_LENGTH,
  MAX_VALUE_LENGTH,
  FONT_SIZE_MULTIPLIER,
} from '../../constants';

import {DataListItem} from '@utils/types';

interface Props {
  data: DataListItem[];
  scrollX: Animated.Value;
  imageSource: ImageSourcePropType;
  itemWidth: number;
}

export const FeatherValueContainer = ({
  data,
  scrollX,
  imageSource,
  itemWidth,
}: Props) => {
  const getFontSize = ({value}: DataListItem) => {
    const valueLength = value.toString().length;

    if (valueLength < DEFAULT_FONT_SIZE_EDGE_LENGTH) {
      return DEFAULT_FONT_SIZE;
    }

    return (MAX_VALUE_LENGTH - valueLength) * FONT_SIZE_MULTIPLIER;
  };

  return (
    <View style={styles.container}>
      <Image
        style={[styles.feather, styles.leftFeather]}
        source={imageSource}
      />
      <FadingEdgeWrapper
        start={FADING_EDGE_TOP_START}
        end={FADING_EDGE_TOP_END}>
        <FadingEdgeWrapper
          start={FADING_EDGE_BOTTOM_START}
          end={FADING_EDGE_BOTTOM_END}
          style={[styles.valueContainerWrapper, { width: itemWidth }]}>
          {data.map((item, index) => (
            <FeatherValueNumber
              key={`feather_value_${item.id}`}
              item={item}
              itemIndex={index}
              scrollX={scrollX}
              fontSize={getFontSize(item)}
              itemWidth={itemWidth}
            />
          ))}
        </FadingEdgeWrapper>
      </FadingEdgeWrapper>
      <Image style={styles.feather} source={imageSource} />
    </View>
  );
};
