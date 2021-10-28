import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {DotsScrollView} from '@components/DotsScrollView';

import {FEATHER_IMAGE} from '@utils/assetsSources';
import {GLOBAL_BACKGROUND_COLOR} from '@utils/colors';
import {MOCKED_LIST_DATA} from 'utils/mockedData';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <DotsScrollView imageSource={FEATHER_IMAGE} data={MOCKED_LIST_DATA} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GLOBAL_BACKGROUND_COLOR,
    flex: 1,
  },
});

export default App;
