import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import model from "./models/scene.gltf"
import gsap from "./js/gsap"

console.log('work')

const scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set( 13, 1.5, 11);
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
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})


const axesHELPER = new THREE.AxesHelper(5);


/*const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);*/
let mixer;
let loader = new GLTFLoader();
loader.load(// resource URL
    model, // called when the resource is loaded
    function (gltf) {

        console.log(gltf);
        /*mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animation;
        const clip = THREE.AnimationClip.findByName(clips, 'PlaneAction');
        const action = mixer.clipAction(clip);
        action.play();*/
        scene.add(gltf.scene);
        window.requestAnimationFrame(() => {
            renderer.render(scene, camera)
        });


    }, // called while loading is progressing
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    }, // called when loading has errors
    function (error) {

        console.log('An error happened');

    },);
/*
scene.add(axesHELPER);*/

