import React, {useRef} from 'react';

import {
  Text,
  FlatList,
  ListRenderItemInfo,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageSourcePropType,
} from 'react-native';

import {FeatherValueContainer} from './components/FeatherValueContainer';
import {ExpandingDots} from '../ExpandingDots';
import {FadingEdgeWrapper} from '../FadingEdgeWrapper';

import {styles} from './styles';

import {
  ITEM_WIDTH,
  FADING_EDGE_LEFT_START,
  FADING_EDGE_LEFT_END,
  FADING_EDGE_RIGHT_START,
  FADING_EDGE_RIGHT_END,
  DECELERATION_RATE,
} from './constants';

import {
  DataListItem,
  StylePropView,
  StylePropText,
  ExpandingDotsSharedProps,
} from '@utils/types';

interface Props extends ExpandingDotsSharedProps {
  data: DataListItem[];
  imageSource: ImageSourcePropType;

  decelerationRate?: number;

  listStyle?: StylePropView;
  listItemStyle?: StylePropView;
  listItemTextStyle?: StylePropText;
  dotContainerStyle?: StylePropView;
  dotStyle?: StylePropView;
}

export const DotsScrollView = ({
  data,
  imageSource,
  decelerationRate = DECELERATION_RATE,
  itemWidth = ITEM_WIDTH,
  dotWidth,
  expandingDotWidth,
  inactiveDotOpacity,
  inactiveDotColor,
  activeOpacity,
  activeDotColor,
  listStyle = styles.listContentContainer,
  listItemStyle = styles.item,
  dotContainerStyle = styles.dotContainer,
  listItemTextStyle = styles.text,
  dotStyle,
}: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const renderItem = ({item}: ListRenderItemInfo<DataListItem>) => {
    return (
      <View style={[listItemStyle, {width: itemWidth}]}>
        <Text style={listItemTextStyle}>{item.title}</Text>
      </View>
    );
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: false,
    })(event);
  };

  const getItemLayout = (_: any, index: number) => ({
    length: itemWidth,
    offset: itemWidth * index,
    index,
  });

  const keyExtractor = (item: DataListItem) => `item_${item.id}`;

  return (
    <View style={styles.wrapper}>
      <FeatherValueContainer
        data={data}
        imageSource={imageSource}
        scrollX={scrollX}
        itemWidth={itemWidth}
      />
      <FadingEdgeWrapper
        style={styles.fadingEdgeStyle}
        start={FADING_EDGE_LEFT_START}
        end={FADING_EDGE_LEFT_END}>
        <FadingEdgeWrapper
          style={styles.fadingEdgeStyle}
          start={FADING_EDGE_RIGHT_START}
          end={FADING_EDGE_RIGHT_END}>
          <Animated.FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtractor}
            contentContainerStyle={listStyle}
            onScroll={onScroll}
            snapToInterval={itemWidth}
            decelerationRate={decelerationRate}
            getItemLayout={getItemLayout}
          />
        </FadingEdgeWrapper>
      </FadingEdgeWrapper>
      <ExpandingDots
        data={data}
        scrollX={scrollX}
        itemWidth={itemWidth}
        dotWidth={dotWidth}
        expandingDotWidth={expandingDotWidth}
        inactiveDotOpacity={inactiveDotOpacity}
        inactiveDotColor={inactiveDotColor}
        activeOpacity={activeOpacity}
        activeDotColor={activeDotColor}
        containerStyle={dotContainerStyle}
        dotStyle={dotStyle}
      />
    </View>
  );
};
