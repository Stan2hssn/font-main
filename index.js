import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import model from "./src/models/scene.gltf";
import gsap from "./src/js/gsap";
import './src/styles/main.css';

console.log('work')

const scene = new THREE.Scene();

const size = 400 / 200;

let camera = new THREE.PerspectiveCamera(40, size, 0.1, 100);
camera.position.set( 10, 1.6, 8);
camera.rotation.set(-0.2, 0.9, 0.15);


let light = new THREE.AmbientLight(0x404040, 100);
let newLight = new THREE.PointLight(0xffffff, 2, 100);
newLight.position.set(10, 10, 10);
scene.add(light, newLight);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas,
    alpha: false,
    powerPreference: 'high-performance'
});
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
renderer.setSize(400, 200);
renderer.setClearColor(0x000000, 1);

window.addEventListener('resize', () => {
    renderer.setSize(400, 200);
    camera.aspect = size;
    camera.updateProjectionMatrix();
})


const axesHELPER = new THREE.AxesHelper(5);

const clock = new THREE.Clock();

let mixer;
let loader = new GLTFLoader();
loader.load(// resource URL
    model, // called when the resource is loaded
    function (gltf) {
        console.log(gltf);

        mixer = new THREE.AnimationMixer(gltf.scene);
/*
        const clip = THREE.AnimationClip.findByName(clips, 'PlaneAction');
*/
        const action = mixer.clipAction(gltf.animations[0]);

        action.play();
        scene.add(gltf.scene);

        animate();

        function animate() {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            mixer.update(delta);
            renderer.render(scene, camera);
        }

    }, // called while loading is progressing
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    }, // called when loading has errors
    function (error) {

        console.log('An error happened');

    },);





/*
scene.add(axesHELPER);*/

