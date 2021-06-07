import * as THREE from 'three';
import { OrbitControls } from './OrbitControls.js';
import { directionalLight, greenCube, grid, blockPlane } from './Mesh/starters';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcce0ff);

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 10, 25);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Imports
scene.add(directionalLight);
scene.add(new THREE.AmbientLight(0x666666));
scene.add(greenCube);
scene.add(grid);
scene.add(blockPlane);

const animate = function () {
  requestAnimationFrame(animate);

  // update orbit controls
  controls.update();
  renderer.render(scene, camera);
};

animate();

console.log('hey');
