import * as THREE from 'three';

// Lights
export const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
directionalLight.position.set(50, 200, 100);
directionalLight.position.multiplyScalar(1.3);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
const d = 300;
directionalLight.shadow.camera.left = -d;
directionalLight.shadow.camera.right = d;
directionalLight.shadow.camera.top = d;
directionalLight.shadow.camera.bottom = -d;
directionalLight.shadow.camera.far = 1000;

// create grid overlay on plane
export const grid = new THREE.GridHelper(175, 20, 0x000000, 0x000000);
grid.material.opacity = 0.15;
grid.material.transparent = true;
grid.position.y = 0.005;

// Create Threejs Plane
export const blockPlane = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
  })
);
blockPlane.position.set(0, -0.25, 0);
blockPlane.scale.set(175, 0.5, 175);
blockPlane.receiveShadow = true;

//green cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
export const greenCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
