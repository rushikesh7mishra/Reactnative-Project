import React, { useRef } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

export default function AvatarOverlay() {
  const modelRef = useRef();

  const onContextCreate = async (gl) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    scene.add(new THREE.AmbientLight(0xffffff, 1));

    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(require('./assets/avatar.glb'));
    modelRef.current = gltf.scene;
    scene.add(modelRef.current);

    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) modelRef.current.rotation.y += 0.01;
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    animate();
  };

  return <GLView style={{ flex: 1, position: 'absolute' }} onContextCreate={onContextCreate} />;
}
