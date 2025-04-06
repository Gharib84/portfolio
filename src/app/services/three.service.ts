import { Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { WebGLRenderer } from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { step, normalWorld, output, texture, vec3, vec4, normalize, positionWorld, bumpMap, cameraPosition, color, uniform, mix, uv, max } from 'three/build/three.tsl';

@Injectable({ providedIn: 'root' })
export class ThreeService implements OnDestroy {
	private camera = new THREE.PerspectiveCamera();
	private scene = new THREE.Scene();
	private controls!: OrbitControls;
	private clock!: THREE.Clock;
	private globe!: THREE.Mesh;
	private gui!: GUI;
	private animationId!: number;
	private renderer!:WebGLRenderer;

	constructor(private ngZone: NgZone) { }
	 initThreeJS( canvas: HTMLElement): void {
		this.camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 100);
		this.camera.position.set(4.5, 2, 3);

		this.scene = new THREE.Scene();

		// Sun
		const sun = new THREE.DirectionalLight('#ffffff', 2);
		sun.position.set(0, 0, 3);
		this.scene.add(sun);

		// Textures
		const textureLoader = new THREE.TextureLoader();
		const dayTexture = textureLoader.load('assets/textures/planets/earth_day_4096.jpg');
		dayTexture.colorSpace = THREE.SRGBColorSpace;
		dayTexture.anisotropy = 8;

		const nightTexture = textureLoader.load('assets/textures/planets/earth_night_4096.jpg');
		nightTexture.colorSpace = THREE.SRGBColorSpace;
		nightTexture.anisotropy = 8;

		const bumpRoughnessCloudsTexture = textureLoader.load('assets/textures/planets/earth_bump_roughness_clouds_4096.jpg');
		bumpRoughnessCloudsTexture.anisotropy = 8;

		// Create the globe
		const sphereGeometry = new THREE.SphereGeometry(1, 64, 64);
		const globeMaterial = new THREE.MeshStandardMaterial({
			map: dayTexture,
			bumpMap: bumpRoughnessCloudsTexture,
			bumpScale: 0.05,
			roughness: 0.5,
			metalness: 0
		});

		this.globe = new THREE.Mesh(sphereGeometry, globeMaterial);
		this.scene.add(this.globe);

		// Renderer
		this.renderer = new WebGLRenderer({ antialias: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setAnimationLoop(this.animate.bind(this));


		// Controls
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		this.controls.minDistance = 0.1;
		this.controls.maxDistance = 50;

		window.addEventListener('resize', this.onWindowResize.bind(this));

		// GUI
		const gui = new GUI();
		gui.add(globeMaterial, 'roughness', 0, 1).name('roughness');
		gui.add(globeMaterial, 'metalness', 0, 1).name('metalness');
	}

	private onWindowResize(): void {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	private animate(): void {
		const delta = this.clock.getDelta();
		this.globe.rotation.y += delta * 0.025;
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	  }

	  ngOnDestroy(): void {
		this.renderer.dispose();
	  }
}