import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraView from './components/CameraView';
import AvatarOverlay from './components/AvatarOverlay';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraView />
      <AvatarOverlay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
