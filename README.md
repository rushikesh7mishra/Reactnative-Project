# 🤖 React Native 3D Avatar Motion Capture App

This mobile application overlays a **3D humanoid avatar** on top of the **live back camera feed** and synchronizes the avatar's movements based on the **real-time body pose** of the user.

It uses **React Native + Expo**, **Three.js** for 3D rendering, and **TensorFlow.js (BlazePose)** for pose detection.

---

## 📱 Features

- 📷 Full-screen live back camera feed
- 🧍‍♂️ 3D humanoid avatar overlay using `.glb` model
- 🧠 Real-time body pose detection (head, arms, hands, hips, knees)
- 🔄 Avatar mimics user’s pose using basic bone rotations
- ⚙️ Optional smoothing for movement
- 🖐 Bonus: Animate hands separately (optional)

---

## 🛠️ Tech Stack

| Feature              | Library/Tool                            |
|----------------------|------------------------------------------|
| Framework            | React Native (Expo)                     |
| Camera               | expo-camera                             |
| 3D Rendering         | three, expo-gl, expo-three              |
| Pose Detection       | @tensorflow-models/pose-detection       |
| Model Loader         | GLTFLoader (three-stdlib)               |

