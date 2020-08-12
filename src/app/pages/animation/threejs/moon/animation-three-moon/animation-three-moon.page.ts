import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { stringify } from '@angular/compiler/src/util';

@Component({
	selector: 'app-animation-three-moon',
	templateUrl: './animation-three-moon.page.html',
	styleUrls: ['./animation-three-moon.page.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AnimationThreeJSMoonPage implements OnInit {
	@ViewChild('threeCanvas', { static: true }) threeCanvas;

	private width = 350;
	private height = 400;

	private scene: THREE.Scene = new THREE.Scene();
	private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
	private cube: THREE.Mesh;

	private rendererCube: THREE.WebGLRenderer;

	PREFIX = 'AnimationMoon';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor() {
		this.log('constructor');
	}


	ngOnInit() {
		this.log('ngOnInit');

		this.threejsInit();
	}

	cubeOnInit() {
		this.log('ngOnInit');

		this.rendererCube = new THREE.WebGLRenderer({ antialias: false, canvas: this.threeCanvas.nativeElement });
		this.rendererCube.setSize(this.width, this.height);

		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		this.cube = new THREE.Mesh(geometry, material);
		this.scene.add(this.cube);

		this.camera.position.z = 5;

		this.rendererCube.render(this.scene, this.camera);

		this.animateCube();

	}

	animateCube() {
		requestAnimationFrame(() => this.animateCube());

		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;

		this.rendererCube.render(this.scene, this.camera);
	}


	threejsInit() {
		this.log('threejsInit');

		const textureURL = '/assets/img/lroc_color_poles_1k.jpg';
		const displacementURL = '/assets/img/ldem_3_8bit.jpg';
		const worldURL = '/assets/img/hipp8_s.jpg';

		this.log('threejsInit', 'threeCanvas=' + stringify(this.threeCanvas));

		const renderer = new THREE.WebGLRenderer({ antialias: false, canvas: this.threeCanvas.nativeElement });
		this.log('threejsInit', 'renderer=' + stringify(renderer));

		const camera = this.camera;
		const scene = this.scene;

		renderer.setSize(this.width, this.height);

		// const scene = new THREE.Scene();
		// const camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);

		/*
		const controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.enablePan = false;
		*/

		const geometry = new THREE.SphereGeometry(2, 60, 60);
		this.log('threejsInit', 'geometry=' + stringify(geometry));

		const textureLoader = new THREE.TextureLoader();
		const texture = textureLoader.load(textureURL);
		const displacementMap = textureLoader.load(displacementURL);
		const worldTexture = textureLoader.load(worldURL);

		const material = new THREE.MeshPhongMaterial(
			{
				color: 0xffffff,
				map: texture,
				displacementMap,
				displacementScale: 0.06,
				bumpMap: displacementMap,
				bumpScale: 0.04,
				reflectivity: 0,
				shininess: 0
			}
		);

		const moon = new THREE.Mesh(geometry, material);
		this.log('threejsInit', 'moon=' + stringify(moon));

		const light = new THREE.DirectionalLight(0xFFFFFF, 1);
		light.position.set(-100, 10, 50);
		scene.add(light);

		const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
		hemiLight.color.setHSL(0.6, 1, 0.6);
		hemiLight.groundColor.setHSL(0.095, 1, 0.75);
		hemiLight.position.set(0, 0, 0);
		scene.add(hemiLight);

		const worldGeometry = new THREE.SphereGeometry(1000, 60, 60);
		const worldMaterial = new THREE.MeshBasicMaterial(
			{
				color: 0xffffff,
				map: worldTexture,
				side: THREE.BackSide
			}
		);

		const world = new THREE.Mesh(worldGeometry, worldMaterial);
		this.log('threejsInit', 'world=' + stringify(world));

		scene.add(world);
		scene.add(moon);

		camera.position.z = 5;

		moon.rotation.x = 3.1415 * 0.02;
		moon.rotation.y = 3.1415 * 1.54;

		function animateMoon() {
			requestAnimationFrame(animateMoon);

			moon.rotation.y += 0.002;
			moon.rotation.x += 0.0001;

			world.rotation.y += 0.0001;
			world.rotation.x += 0.0005;

			renderer.render(scene, camera);
		}
		animateMoon();

		function onResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);
		}
		window.addEventListener('resize', onResize, false);
	}
}
