import type { AnimationClip, Camera, Group, Object3D, Scene } from "three";
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class GltfObj {
    public animations: AnimationClip[] | undefined;
    public scene: Group | undefined;
    public scenes: Group[] | undefined;
    public cameras: Camera[] | undefined;
    public asset: GLTF["asset"] | undefined;


    private _scene: Scene;
    constructor(scene: Scene, gltfPath: string) {
        this._scene = scene;
        // Instantiate a loader
        const loader = new GLTFLoader();;
        // Load a glTF resource
        loader.load(gltfPath, this._handleLoad.bind(this), this._handleLoading.bind(this), this._handleError.bind(this))
    }

    private _handleLoad(gltf: GLTF) {
        this._scene.add(gltf.scene);

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