var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 2;

var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setClearColor("#FFFFFF");

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var light2 = new THREE.PointLight(0xFFFFFF, 1.5, 500);
light2.position.set(0,10,0);
scene.add(light2);

var light = new THREE.AmbientLight(0xFFFFFF, 1.5, 500);
scene.add(light);

var objLoader = new THREE.OBJLoader();
var mtlLoader = new THREE.MTLLoader();

var MyObj;

mtlLoader.setPath('/obj/');

var url = "eggplant.mtl";

mtlLoader.load(url, function(materials) {

materials.preload();

var objLoader = new THREE.OBJLoader();
objLoader.setMaterials(materials);
objLoader.setPath('/obj/');
objLoader.load( 'eggplant.obj', function (object) {

    MyObj = object;

    object.rotation.y = 1;
    object.position.set(2, -1, -2);

    scene.add(object);

});

});

var render = function() {
    requestAnimationFrame(render);  

    MyObj.rotation.x += 0.001;

    renderer.render(scene, camera);
} 

render();