import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { AnimationMixer } from 'three';
import { step, normalWorld, output, texture, vec3, vec4, normalize, positionWorld, bumpMap, cameraPosition, color, uniform, mix, uv, max } from 'three/build/three.tsl';
@Injectable({
  providedIn: 'root'
})
export class ThreeService {

  constructor() { }
}
