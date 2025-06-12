import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';

export async function loadPoseModel() {
  await tf.ready();
  return await poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, {
    runtime: 'tfjs',
    modelType: 'full',
  });
}
