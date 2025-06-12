import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

const { width, height } = Dimensions.get('window');

export default function CameraView() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return null;
  if (hasPermission === false) return <View><Text>No camera access</Text></View>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    width: width,
    height: height,
    position: 'absolute',
  },
});
