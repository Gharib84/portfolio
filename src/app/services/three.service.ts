import { Injectable,NgZone,OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { AnimationMixer } from 'three';
import { step, normalWorld, output, texture, vec3, vec4, normalize, positionWorld, bumpMap, cameraPosition, color, uniform, mix, uv, max } from 'three/build/three.tsl';
@Injectable({
  providedIn: 'root'
})
export class ThreeService implements OnDestroy {
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private renderer!: WebGLRenderer;
  private raycaster!: THREE.Raycaster;
  private mouse!: THREE.Vector2;
  private target!: THREE.Vector3;
  private targetCamera!: THREE.Vector3;
  private targetCameraPosition!: THREE.Vector3;
  private targetCameraRotation!: THREE.Vector3;
  private targetCameraFov!: number;
  private targetCameraAspect!: number;
  private targetCameraNear!: number;
  private targetCameraFar!: number;
  private targetCameraUp!: THREE.Vector3;
  private targetCameraLookAt!: THREE.Vector3;
  private targetCameraPositionX!: number;
  private targetCameraPositionY!: number;
  private targetCameraPositionZ!: number;
  private targetCameraRotationX!: number;
  private targetCameraRotationY!: number;
  private targetCameraRotationZ!: number;
  private targetCameraFovX!: number;
  private targetCameraFovY!: number;
  private targetCameraAspectX!: number;
  private targetCameraAspectY!: number;
  private targetCameraNearX!: number;
  private targetCameraNearY!: number;
  private targetCameraFarX!: number;
  private targetCameraFarY!: number;
  private targetCameraUpX!: number;
  private targetCameraUpY!: number;
  private targetCameraUpZ!: number;
  private targetCameraLookAtX!: number;
  private targetCameraLookAtY!: number;
  private targetCameraLookAtZ!: number;
  private mixer!: AnimationMixer;
  private controls!: OrbitControls;
  private clock!: THREE.Clock;
  private globe!: THREE.Mesh;
  private gui!: GUI;
  private animationId!: number;

  constructor(private ngZone: NgZone) { }

  ngOnDestroy(): void {
    if (this.animationId) {
      window.cancelAnimationFrame(this.animationId);
    }
  }
}
