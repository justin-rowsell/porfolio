<script lang="ts">
    import headshot from '$lib/assets/headshot.jpg';  
	import { onMount } from 'svelte';
	import { GltfObj } from './gltf-obj';
	import { MyScene } from './my-scene';


    let el: Element;

    onMount(() => {
        const myScene = new MyScene(el);
        const branch = new GltfObj(myScene, '/3d/scene.gltf');
        myScene.animate();
        myScene.resizeOnResize(); // tell it to resize with the window
    });
</script>
<canvas class="absolute top-3 right-0 w-4/6 -z-50" bind:this={el}></canvas>
<div class="absolute container h-screen flex flex-row  justify-center
            lg:p-36 md:p-16 sm:p-8 flex flex-rowlg:p-32 md:p-16 sm:p-8">
    <img src="{headshot}" alt="Justin Rowsell Headshot" 
        class="w-36 h-36 rounded-full object-cover flex mr-8">
    <div>
        <p class="font-sans text-md w-full text-left text-darkShade m-0 p-0">Hi, my name is</p>
        <span class="font-sans text-4xl w-full font-bold text-left text-main mt-0 pt-0">Justin Rowsell</span>
        <p class="font-sans text-sm w-full text-left text-darkShade m-0 p-0">
            I'm an <span class="font-bold">Independent Full-Stack GIS Software Engineer</span><br/>
            creating innovative solutions with businesses working in climate tech.
        </p>
    </div>
</div>