import * as THREE from 'three';
// import * as dat from 'dat.gui';
import terrain from '../assets/images/textures/terrain.jpg';
import terrainHeight from '../assets/images/textures/height.png';
import alphamap from '../assets/images/textures/alpha.png';

// Loading
const loader = new THREE.TextureLoader();
const texture = loader.load(terrain);
const displacement = loader.load(terrainHeight);
const alpha = loader.load(alphamap);

// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64);

// Materials
const material = new THREE.MeshStandardMaterial({
  color: 'gray',
  map: texture,
  displacementMap: displacement,
  displacementScale: 0.6,
  alphaMap: alpha,
  transparent: true,
  depthTest: false,
});

// Mesh
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

plane.rotation.x = 181;


// Lights

const pointLight1 = new THREE.PointLight('#00b3ff', 3);
pointLight1.position.set(1, 10, -10);
scene.add(pointLight1);

// const light1 = gui.addFolder('Light 1');
// const light1color = {
//   color: 0xff0000,
// };

// light1.add(pointLight1.position, 'x').min(-10).max(10).step(0.01);
// light1.add(pointLight1.position, 'y').min(-10).max(10).step(0.01);
// light1.add(pointLight1.position, 'z').min(-10).max(10).step(0.01);
// light1.addColor(light1color, 'color').onChange(() => {
//   pointLight1.color.set(light1color.color);
// });


// gui.add(plane.rotation, 'x').min(200).max(200).step(0.01);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Animate
 */

let mouseY = 0;

function animateTerrain(event) {
  mouseY = event.clientY;
}

document.addEventListener('mousemove', animateTerrain)

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  plane.rotation.z = 0.5 * elapsedTime;
  plane.material.displacementScale = .6 + mouseY * .0004

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
