let scene, camera, renderer, sphere1, sphere2, sphere3, sphere4, sphere5, sphere6, sphere7, sphere8, sphere9;
const canvasContainer = document.querySelector('.canvas_container')

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    canvasContainer.appendChild(renderer.domElement);

    const sphereGeometry = new THREE.SphereGeometry(.25, 32, 32);
    const sphereGeometrySmaller = new THREE.SphereGeometry(.1, 32, 32);
    const sphereGeometrySmallest = new THREE.SphereGeometry(.07, 32, 32);
    const sphereTexture = new THREE.TextureLoader().load('images/flame_texture.jpg');

    const flameMaterial = new THREE.MeshBasicMaterial({
        map: sphereTexture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    });

    sphere1 = new THREE.Mesh(sphereGeometry, flameMaterial);
    sphere1.position.set(-2.5, -1.7, 0);
    scene.add(sphere1);

    sphere2 = new THREE.Mesh(sphereGeometry, flameMaterial);
    sphere2.position.set(0, -2.5, 0);
    scene.add(sphere2);

    sphere3 = new THREE.Mesh(sphereGeometry, flameMaterial);
    sphere3.position.set(2, -1, 0);
    scene.add(sphere3);

    sphere4 = new THREE.Mesh(sphereGeometrySmallest, flameMaterial);
    sphere4.position.set(-5, 1, 0);
    scene.add(sphere4);

    sphere5 = new THREE.Mesh(sphereGeometrySmaller, flameMaterial);
    sphere5.position.set(3.5, 0, 0);
    scene.add(sphere5);

    sphere6 = new THREE.Mesh(sphereGeometrySmaller, flameMaterial);
    sphere6.position.set(-4, -1, 0);
    scene.add(sphere6);

    sphere7 = new THREE.Mesh(sphereGeometrySmallest, flameMaterial);
    sphere7.position.set(5, 1, 0);
    scene.add(sphere7);

    sphere8 = new THREE.Mesh(sphereGeometrySmallest, flameMaterial);
    sphere8.position.set(6.5, 2, 0);
    scene.add(sphere8);

    sphere9 = new THREE.Mesh(sphereGeometrySmallest, flameMaterial);
    sphere9.position.set(-7, 2, 0);
    scene.add(sphere9);

    camera.position.z = 5;

}

function animate() {
    requestAnimationFrame(animate);

    sphere1.rotation.x += 0.03;
    // sphere1.rotation.y += 0.05;

    sphere2.rotation.x += 0.03;
    sphere2.rotation.y += 0.03;

    // sphere3.rotation.x += 0.01;
    sphere3.rotation.y += 0.03;

    sphere4.rotation.x += 0.03;

    sphere5.rotation.x += 0.03;
    sphere5.rotation.y += 0.03;

    sphere6.rotation.x += 0.03;
    sphere6.rotation.y += 0.03;

    sphere7.rotation.y += 0.03;

    sphere8.rotation.x += 0.03;
    sphere8.rotation.y += 0.03;

    sphere9.rotation.x += 0.03;
    sphere9.rotation.y += 0.03;

    renderer.setClearColor(0x000000, 0);
    renderer.clear();

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('resize', onWindowResize, false)

init();
animate();

renderer.domElement.addEventListener('click', function (event) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects([sphere1, sphere2, sphere3]);
    if (intersects.length > 0) {
        const intersectedSphere = intersects[0].object;
        if (intersectedSphere === sphere1) {
            goToSection('section1');
        } else if (intersectedSphere === sphere2) {
            goToSection('section2');
        } else if (intersectedSphere === sphere3) {
            goToSection('section3');
        }
    }
});