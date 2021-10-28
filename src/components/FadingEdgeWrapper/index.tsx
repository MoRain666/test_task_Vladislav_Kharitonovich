import React from 'react';

import {StyleSheet} from 'react-native';

import MaskedView from '@react-native-community/masked-view';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

import {GRADIENT_FADING_EDGE} from '@utils/colors';
import {StylePropView, GradientLocations} from '@utils/types';

interface Props {
  children: React.ReactNode;
  start: LinearGradientProps['start'];
  end: LinearGradientProps['end'];

  locations?: GradientLocations;
  style?: StylePropView;
}

const LOCATIONS: GradientLocations = [0.1, 1];

export const FadingEdgeWrapper = ({
  start,
  end,
  style,
  children,
  locations = LOCATIONS,
}: Props) => {
  return (
    <MaskedView
      style={style}
      maskElement={
        <LinearGradient
          style={styles.gradient}
          colors={GRADIENT_FADING_EDGE}
          start={start}
          end={end}
          locations={locations}
        />
      }>
      {children}
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
