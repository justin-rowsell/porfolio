import { Object3D, PerspectiveCamera, Scene, WebGLRenderer } from "three";

export class MyScene {
    public renderer: WebGLRenderer;
    public camera: PerspectiveCamera;
    public scene: Scene;

    constructor(el: Element) {
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // this.scene.add(obj);
        this.camera.position.z = 5;
        
        
        this.renderer = new WebGLRenderer({ antialias: true, canvas: el });
    }

    resize(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }
    resizeOnResize(): void {
        window.addEventListener('resize', this.resize);
    }

    animate() {
        // requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    };
}

