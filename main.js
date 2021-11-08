
import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

scene.background = new THREE.TextureLoader().load("../../triangles.png")
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#background')});
renderer.antialias = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry;
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
var cube ;
const imagetexture = new THREE.TextureLoader().load("image.jpg",

function(texture){

    console.log(texture.image.width)
    console.log(texture.image.height)
    
    geometry = new THREE.BoxGeometry(2,2,2);
    console.log(geometry)
    const material = new THREE.MeshBasicMaterial( );
material.map =  imagetexture
cube= new THREE.Mesh( geometry, material );
console.log(cube);
cube.position.set(-1,0,0);
//scene.add( cube );
});
console.log(imagetexture);

//const orbit = new OrbitControls( camera, renderer.domElement );
camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );
    //orbit.update();
	renderer.render( scene, camera );
}
animate();

document.body.onscroll = moveCamera;
function moveCamera(){
const t = document.body.getBoundingClientRect().top;
cube.position.set(-1,t*-.02,0);
cube.rotation.y +=0.01;



}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}