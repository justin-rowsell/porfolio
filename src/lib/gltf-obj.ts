import { AnimationMixer, LoopOnce, type AnimationClip, type Camera, type Group, type Object3D, type Scene } from "three";
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { MyScene } from "./my-scene";

export class GltfObj {
    public animations: AnimationClip[] | undefined;
    public scene: Group | undefined;
    public scenes: Group[] | undefined;
    public cameras: Camera[] | undefined;
    public asset: GLTF["asset"] | undefined;


    private _myScene: MyScene;
    // private _animateFunc: Function;
    constructor(myScene: MyScene, gltfPath: string) {
        this._myScene = myScene;
        
        // Instantiate a loader
        const loader = new GLTFLoader();;
        // Load a glTF resource
        loader.load(gltfPath, this._handleLoad.bind(this), this._handleLoading.bind(this), this._handleError.bind(this))
    }

    private _handleLoad(gltf: GLTF) {
        const scale = 25;
        const gltfScene = gltf.scene;
        gltfScene.children.forEach((mesh) => mesh.scale.set(scale, scale, scale));
        gltfScene.position.setX(32);
        gltfScene.position.setY(15);
        gltfScene.position.setZ(0);

        this._myScene.scene.add(gltf.scene);

        const mixer = new AnimationMixer(gltfScene);
		const animation = mixer.clipAction( gltf.animations[0] ).play().warp(1, 0, 4.5);
        animation.setLoop(LoopOnce, 1);
        animation.clampWhenFinished = true;
        this._myScene.mixer = mixer;
        
	    this.animations = gltf.animations;
	    this.scene = gltf.scene;
	    this.scenes = gltf.scenes;
	    this.cameras = gltf.cameras;
	    this.asset = gltf.asset;
    }

    private _handleLoading(xhr: ProgressEvent) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    }

    private _handleError(error: ErrorEvent) {
        console.error(error);
    }
}