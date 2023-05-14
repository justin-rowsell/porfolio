<script>
	import Analytics from "$lib/analytics.svelte";
    import NavBar from "$lib/nav-bar.svelte";
    import "../../app.css";
</script>
<div class="">
    <NavBar hoverColor={'text-white'}/>
    <slot/>
</div>