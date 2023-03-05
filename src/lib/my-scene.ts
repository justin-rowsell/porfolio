import { AmbientLight, AnimationMixer, Clock, PerspectiveCamera, PointLight, Scene, WebGLRenderer } from "three";

export class MyScene {
    public renderer: WebGLRenderer;
    public camera: PerspectiveCamera;
    public scene: Scene;
    public mixer: AnimationMixer | undefined;
    public clock: Clock;

    constructor(el: Element) {
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new WebGLRenderer({ antialias: true, canvas: el });
        this.renderer.setClearColor( 0xffffff, 0 ); // second param is opacity, 0 => transparent
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.setZ(30);
    
        const pointLight = new PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);
        const ambientLight = new AmbientLight(0xffffff);
        this.scene.add(pointLight, ambientLight);
        this.clock = new Clock();
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    }
    resizeOnResize(): void {
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        if (this.mixer) {
            const delta = this.clock.getDelta();
            this.mixer.update(delta);
        }
        this.renderer.render(this.scene, this.camera);
    };
}

