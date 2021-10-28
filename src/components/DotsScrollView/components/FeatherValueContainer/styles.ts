import {StyleSheet} from 'react-native';

import {FEATHER_CONTAINER_VALUE_HEIGHT} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feather: {
    width: 40,
    height: 100,
    resizeMode: 'contain',
  },
  leftFeather: {
    transform: [{scaleX: -1}],
  },
  valueContainerWrapper: {
    height: FEATHER_CONTAINER_VALUE_HEIGHT,
  },
});
