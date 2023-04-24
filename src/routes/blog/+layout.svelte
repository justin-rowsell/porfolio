<script>
	import Analytics from "$lib/analytics.svelte";
    import NavBar from "$lib/nav-bar.svelte";
    import "../../app.css";
</script>
<div class="bg-blogSecondary text-blogPrimary">
    <NavBar hoverColor={'text-blogAccent'}/>
    <slot/>
</div>